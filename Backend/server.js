const express = require("express");
const bodyParser = require("body-parser");
const xlsx = require("xlsx");
const cors = require("cors");
const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.post("/api/saveData", (req, res) => {
  try {
    const data = req.body;
    const filePath = "./data.xlsx";
    console.log("Received data:", data);

    let workbook;
    if (fs.existsSync(filePath)) {
      workbook = xlsx.readFile(filePath);
    } else {
      workbook = xlsx.utils.book_new();
    }

    const sheetName = "Sheet1";
    let worksheet;
    if (workbook.SheetNames.includes(sheetName)) {
      worksheet = workbook.Sheets[sheetName];
      const sheetData = xlsx.utils.sheet_to_json(worksheet);
      sheetData.push(data);
      worksheet = xlsx.utils.json_to_sheet(sheetData);
    } else {
      worksheet = xlsx.utils.json_to_sheet([data]);
    }

    xlsx.utils.book_append_sheet(workbook, worksheet, sheetName);
    xlsx.writeFile(workbook, filePath);

    res.status(200).send("Data saved successfully!");
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).send(`Error saving data: ${error.message}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
