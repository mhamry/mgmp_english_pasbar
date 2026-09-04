const scriptProp = PropertiesService.getScriptProperties();

function initialSetup() {
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  scriptProp.setProperty("key", activeSpreadsheet.getId());
}

function sanitizeValue(value) {
  if (typeof value !== "string") return value;

  const triggers = ["=", "+", "-", "@"];

  if (triggers.some((t) => value.startsWith(t))) {
    return "'" + value;
  }

  return value;
}

function doPost(e) {
  const lock = LockService.getScriptLock();

  lock.tryLock(10000);

  try {
    // Nama Sheet
    const sheetName = e.parameter.sheet_name || "Sheet1";

    // Buka Spreadsheet berdasarkan ID yang disimpan initialSetup()
    const doc = SpreadsheetApp.openById(scriptProp.getProperty("key"));

    const sheet = doc.getSheetByName(sheetName);

    // Membaca header baris pertama
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    // Baris berikutnya
    const nextRow = sheet.getLastRow() + 1;

    // Membentuk data berdasarkan nama header
    const newRow = headers.map(function (header) {
      if (header === "id") {
        return Utilities.getUuid();
      }

      if (header === "timestamp") {
        return new Date();
      }

      const rawValue = e.parameter[header] || "";

      return sanitizeValue(rawValue);
    });

    // Masukkan data
    const newRange = sheet.getRange(nextRow, 1, 1, newRow.length);

    newRange.setNumberFormat("@");

    newRange.setValues([newRow]);

    return ContentService.createTextOutput(
      JSON.stringify({
        result: "success",
        row: nextRow,
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        result: "error",
        error: error.toString(),
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
