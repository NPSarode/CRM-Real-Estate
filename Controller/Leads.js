import xlsx from "xlsx";
import { db } from "../Database/DbConnection.js";
import fs from "fs";
import { sendStatus } from "../Utility/helpers.js";

export const importFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(422).json({ message: "No file uploaded" });
    }

    const filePath = req.file.path;
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const results = xlsx.utils.sheet_to_json(sheet);

    try {
      for (const row of results) {
        await db.query(
          "INSERT INTO leads (user_id, name, number) VALUES (1, $1, $2)",
          [
            row.Name, // Ensure column names match the Excel file
            row.Number,
          ]
        );
      }
      fs.unlinkSync(filePath);
      res.json({
        success: true,
        message: "Excel exported successfully !",
      });
    } catch (error) {
      res.status(422).json({ message: "Error inserting data" });
    }
  } catch (error) {
    sendStatus(res, "Oops Something Went Wrong", 422, error);
  }
};


export const getLeadsByUserId = async (request, response) => {
  try {
    const { id } = request.params;
    const { rows } = await db.query(`SELECT * FROM leads WHERE user_id=${id};`);
    sendStatus(response, "Leads fetched successfully !", 200, null, rows);
  } catch (error) {
    sendStatus(response, "Oops Something Went Wrong", 422, error);
  }
};
