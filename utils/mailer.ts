import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  text: string;
}

export default async (mailOptions: MailOptions) => {
  if (!process.env.EMAIL || !process.env.PASS) {
    throw new Error("Environment variables missing");
  }

  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) reject(new Error("Coudn't Send Mail"));
      else resolve(info);
    });
  });
};
