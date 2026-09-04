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
    const sheetName = e.parameter.sheet_name || "Sheet1";
    const doc = SpreadsheetApp.openById(scriptProp.getProperty("key"));
    const sheet = doc.getSheetByName(sheetName);

    // Dynamic File Upload ke Google Drive
    let fileUrl = "";
    if (e.parameter.fileData) {
      const bytes = Utilities.base64Decode(e.parameter.fileData);
      const blob = Utilities.newBlob(bytes, e.parameter.fileMimeType, e.parameter.fileName);

      // Opsional: Ganti FOLDER_ID_KAMU dengan ID Folder Drive spesifik jika ingin rapi
      // const folder = DriveApp.getFolderById("FOLDER_ID_KAMU");
      // const file = folder.createFile(blob);

      // Mengunggah ke Root Drive jika ID folder tidak diset:
      const file = DriveApp.createFile(blob);
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW); // Agar file bisa dibuka via link
      fileUrl = file.getUrl();
    }

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const nextRow = sheet.getLastRow() + 1;

    const newRow = headers.map(function (header) {
      if (header === "id") {
        return Utilities.getUuid();
      }

      if (header === "timestamp") {
        return new Date();
      }

      // Jika nama header di Sheet1 bernama "buktitf", isi dengan URL file dari Drive
      if (header === "buktitf") {
        return fileUrl;
      }

      const rawValue = e.parameter[header] || "";
      return sanitizeValue(rawValue);
    });

    const newRange = sheet.getRange(nextRow, 1, 1, newRow.length);
    newRange.setNumberFormat("@");
    newRange.setValues([newRow]);

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
    lock.releaseLock();
  }
}
