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

  try {
    lock.waitLock(10000);

    const sheetName = e.parameter.sheet_name || "Sheet1";

    const doc = SpreadsheetApp.openById(scriptProp.getProperty("key"));

    const sheet = doc.getSheetByName(sheetName);

    if (!sheet) {
      throw new Error("Sheet tidak ditemukan: " + sheetName);
    }

    // ==========================================
    // UPLOAD FILE KE GOOGLE DRIVE
    // ==========================================

    let fileUrl = "";

    if (e.parameter.fileData && e.parameter.fileName && e.parameter.fileMimeType) {
      const bytes = Utilities.base64Decode(e.parameter.fileData);

      const blob = Utilities.newBlob(bytes, e.parameter.fileMimeType, e.parameter.fileName);

      const file = DriveApp.createFile(blob);

      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

      fileUrl = file.getUrl();
    }

    // ==========================================
    // AMBIL HEADER
    // ==========================================

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    const nextRow = sheet.getLastRow() + 1;

    // ==========================================
    // BUAT DATA BARU
    // ==========================================

    const newRow = headers.map(function (header) {
      if (header === "id") {
        return Utilities.getUuid();
      }

      if (header === "timestamp") {
        return new Date();
      }

      // URL gambar
      if (header === "buktitf") {
        return fileUrl;
      }

      const rawValue = e.parameter[header] || "";

      return sanitizeValue(rawValue);
    });

    // ==========================================
    // SIMPAN KE SHEET
    // ==========================================

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    // ==========================================
    // RESPONSE
    // ==========================================

    return ContentService.createTextOutput(
      JSON.stringify({
        result: "success",
        row: nextRow,
        fileUrl: fileUrl,
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
    try {
      lock.releaseLock();
    } catch (err) {}
  }
}
