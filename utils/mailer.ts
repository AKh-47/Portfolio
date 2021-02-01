import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

interface Props {
  name: string;
  email: string;
  message: string;
}

export default async ({ name, email, message }: Props) => {
  if (!process.env.EMAIL || !process.env.PASS) {
    throw new Error("Environment Invalid");
  }

  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    const html = `
      <h2>${name}</h2> 
      <h4>${email}</h4>
      <p>${message}</p>
    `;

    transporter.sendMail(
      {
        from: "akhildoesdev@gmail.com",
        to: "akhildoesdev@gmail.com, kalaakki@gmail.com",
        subject: "Portfolio Response",
        html,
      },
      (err, info) => {
        console.log(info);

        if (err) reject(new Error("Coudn't Send Mail"));
        else resolve(info);
      }
    );
  });
};
