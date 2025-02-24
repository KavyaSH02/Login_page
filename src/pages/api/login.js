import connectDB, { LogInCollection } from "../../db/mongo";

export default async function handler(req, res) {
    if (req.method === "POST") {
        await connectDB();
        const { name, password } = req.body;

        try {
            const user = await LogInCollection.findOne({ name });
            if (user && user.password === password) {
                return res.status(200).json({ success: true });
            } else {
                return res.status(400).json({ error: "Invalid credentials" });
            }
        } catch (error) {
            return res.status(500).json({ error: "Internal Server Errors" });
        }
    }
}
