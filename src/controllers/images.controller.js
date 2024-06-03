import { executeQuery } from "../cassandraDB.js";

export const getImageById = async (req, res) => {
    try {
        const { image_id } = req.params;
        const result = await executeQuery('SELECT * FROM images WHERE image_id = ?', [image_id]);
        if (result) {
            res.json(result);

        }
        res.status(404).json({message: "Image not found"});
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });

    }
};