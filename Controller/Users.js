import { db } from "../Database/DbConnection.js";
import { sendStatus } from "../Utility/helpers.js";

export const getUserList = async (request, response) => {
  try {
    const { rows } = await db.query("SELECT * FROM users;");
    sendStatus(response, "Users fetched successfully !", 200, null, rows);
  } catch (error) {
    sendStatus(response, "Oops Something Went Wrong", 422, error);
  }
};
