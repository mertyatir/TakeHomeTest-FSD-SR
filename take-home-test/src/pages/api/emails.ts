import { NextApiRequest, NextApiResponse } from "next"
import { getEmails } from "@/database"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const emails = await getEmails()
    res.status(200).json(emails)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal server error" })
  }
}
