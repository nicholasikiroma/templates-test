import nodemailer from "nodemailer";
import Handlebars from "handlebars";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { config } from "dotenv";

config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const username = process.env.EMAIL;
const password = process.env.PASSWORD;

async function sendMail(email, subject, payload, mailTemplateFileName) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: username,
        pass: password,
      },
    });

    const source = fs.readFileSync(
      path.join(__dirname, `./mail-templates/${mailTemplateFileName}.handlebars`),
      "utf8"
    );
    const compiledTemplate = Handlebars.compile(source);

    const options = {
      from: username,
      to: email,
      subject: subject,
      html: compiledTemplate(payload),
    };

    console.log("📧 Preparing to send email...");
    await transporter.sendMail(options);
    console.log("🚀 Email sent successfully!");
  } catch (error) {
    console.error("❌ Error while sending email:", error);
    return error;
  }
}

console.log("📬 Initiating email sending process...");

await sendMail("replace with the email address of the recipient", "Templates Test", "", "replace with the name of the template you want to test without the file extension (e.g verification-email");
console.log("🎉 Email sending process completed!");
