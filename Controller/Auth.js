import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import { sendStatus } from "../Utility/helpers.js";
import { db } from "../Database/DbConnection.js";

// Register new user
export const register = async (request, response) => {
  try {
    const {
      username,
      first_name,
      last_name,
      email,
      password,
      role_id,
      organization_id,
    } = request.body;

    const hashPassword = await bcrypt.hash(password, 10);

    const query = `SELECT * FROM public.user_crud(
    'create', NULL, '${username}', '${email}', '${hashPassword}', '${role_id}', '${organization_id}', '${first_name}', '${last_name}');`;

    await db.query(query);

    response.json({
      success: true,
      message: "User created successfully.",
    });
  } catch (error) {
    sendStatus(response, "Oops Something Went Wrong", 422, error);
  }
};

// Login User
export const login = async (request, response) => {
  try {
    const { username, password } = request.body;

    const { rows } = await db.query(
      `SELECT * FROM users WHERE username = '${username}'`
    );

    if (rows?.length && (await bcrypt.compare(password, rows?.[0].password))) {
      console.log(rows?.[0].id);
      const token = jsonwebtoken.sign(
        { id: rows?.[0].id },
        process.env.JWT_PRIVATE_KEY,
        { expiresIn: "8h" }
      );

      response.json({
        success: true,
        data: { ...rows[0], token },
      });
    } else {
      sendStatus(response, "User not found", 422, error);
    }
  } catch (error) {
    sendStatus(response, "Oops Something Went Wrong", 422, error);
  }
};

// Logout User
export const logout = async (request, response) => {
  try {
    response.json({
      success: true,
      message: "User logout successfully.",
    });
  } catch (error) {
    sendStatus(response, "Oops Something Went Wrong", 422, error);
  }
};
