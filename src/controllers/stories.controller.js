import { pool } from "../db.js";

// Get all stories

export const getAllStories = async (req, res) => {
    const result = await pool.query('SELECT * FROM stories');
    const rows = result.rows;
    res.send(rows);
}