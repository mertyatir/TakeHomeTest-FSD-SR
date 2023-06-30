import { NextApiRequest, NextApiResponse } from "next"
import { deleteEmail } from "@/database"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query

  if (req.method === "DELETE") {
    try {
      // Convert the ID to a number
      const emailId = Number(id)

      // Delete the email
      await deleteEmail(emailId)

      // Respond with success message
      res.status(200).json({ message: "Email deleted successfully" })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: "Internal server error" })
    }
  } else {
    // Handle other HTTP methods
    res.status(405).json({ error: "Method Not Allowed" })
  }
}
