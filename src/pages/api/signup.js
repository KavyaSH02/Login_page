import connectDB, { LogInCollection } from "../../db/mongo";

export default async function handler(req, res) {
    if (req.method === "POST") {
        await connectDB();
        const { name, password } = req.body;

        try {
            const existingUser = await LogInCollection.findOne({ name });
            if (existingUser) {
                return res.status(400).json({ error: "User already exists" });
            }
            await LogInCollection.create({ name, password });
            return res.status(201).json({ success: true });
        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

