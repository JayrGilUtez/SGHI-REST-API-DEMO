import { pool } from "../db.js";

// Get all stories

export const getAllStories = async (req, res) => {
    const result = await pool.query('SELECT * FROM stories');
    const rows = result.rows;
    res.send(rows);
};

// Get by ID

export const getStoryById = async (req, res) => {
    try {
        const { story_id } = req.params;
        const result = await pool.query('SELECT * FROM stories WHERE story_id = $1', [story_id]);
        const rows = result.rows;
        if (rows.length <= 0) {
            return res.status(404).json({ message: 'Story not found' });
        }
        res.send(rows[0]);
    } catch (error) {

        res.status(500).send('Something went wrong.');
        console.log(error);
    }
};

// Get stories by user_id

export const getStoriesByUserId = async (req, res) => {
    try {
        const { user_id } = req.params;
        const result = await pool.query('SELECT * FROM stories WHERE user_id = $1', [user_id]);
        const rows = result.rows;
        if (rows.length <= 0) {
            return res.status(404).json({ message: 'Not found' });
        }
        res.send(rows);
    } catch (error) {
        res.status(500).send('Something went wrong.');
        console.log(error);
    }
};

// Create story
/**
 * 
 {
  "nodes": [],
  "edges": [],

  "viewport": {
    "x": 173.13602364931037,
    "y": -0.8197710814616528,
    "zoom": 0.8826148303935278
  }
}
 */

export const createStory = async (req, res) => {

    const emptyDiagram = `{"nodes":[],"edges":[],"viewport":{"x": 0, "y":0, "zoom":1}}`;

    try {
        const { user_id, title, description, isPublic} = req.body;
        const result = await pool.query(
            'INSERT INTO stories (user_id, title, description, isPublic, diagram) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [user_id, title, description, isPublic, emptyDiagram]
        );
        const rows = result.rows;
        res.status(201).send(rows);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
        console.log(error);
    }
};

// Update story

export const updateStory = async (req, res) => {
    try {
        const { story_id } = req.params;
        const { title, description, isPublic, diagram } = req.body;
        const values = [];
        const query = ['UPDATE stories SET'];
        let setIndex = 1;

        if (title !== undefined) {
            query.push(`title = $${setIndex},`);
            values.push(title);
            setIndex++;
        }

        if (description !== undefined) {
            query.push(`description = $${setIndex},`);
            values.push(description);
            setIndex++;
        }

        if (isPublic !== undefined) {
            query.push(`isPublic = $${setIndex},`);
            values.push(isPublic);
            setIndex++;
        }

        if (diagram !== undefined) {
            query.push(`diagram = $${setIndex}`);
            values.push(diagram);
            setIndex++;
        }

        query.push(`WHERE story_id = ${story_id} RETURNING *`);

        // .join(' ') Para unir los elementos del array en un string separador por un espacio
        // .replace('','') para quitar la ultima y evitar un error de sintaxis 
        const result = await pool.query(query.join(' ').replace(', WHERE story_id', ' WHERE story_id'), values);

        // Con esto podemos ver que consulta se esta ejecutando
        console.log(query.join(' ').replace(', WHERE story_id', ' WHERE story_id'), values);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Story not found' });
        }

        res.status(200).json({ message: 'Story updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
        console.log(error);
    }
};

export const deleteStoryById = async (req, res) => {
    try {
        const { story_id } = req.params;
        const result = await pool.query(`DELETE FROM stories WHERE story_id = $1 RETURNING *`, [story_id]);
        if (result.rowCount > 0) {
            const rows = result.rows;
            res.status(200).send(rows);
        } else {
            res.status(404).json({ message: 'Story not found' });
        }

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
        console.log(error);
    }

}
