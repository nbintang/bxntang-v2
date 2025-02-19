"use server";
import nodemailer from "nodemailer";
export type MailProps = {
  to?: string;
  subject?: string;
  from: string;
  message: string;
};
const config = {
  host: process.env.EMAIL_HOST,
  pass: process.env.EMAIL_PASS,
  user: process.env.EMAIL_USER,
  port: Number(process.env.EMAIL_PORT),
};
async function sendEmail({ to, subject,  message, from }: MailProps) {
  const { host,  pass, port, user } = config;
  const transporter = await nodemailer.createTransport({
    port,
    host,
    auth: {
      user,
      pass,
    },
  });

  await transporter.sendMail({
    from,
    to,
    subject,
    text: message,
  });
}

export default sendEmail;
