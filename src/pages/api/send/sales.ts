// services
import { sendSalesEmail } from "@email/dispatcher/send-sales-email";
// types
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === "POST") {
    try {
      const from = req.body.work_email;
      const body = req.body;

      await sendSalesEmail({ from, body });

      res.status(200).json({ status: "success" });
    } catch (error) {
      res.status(400).send({ error });
    }
  }
};
