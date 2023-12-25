import node_email from "nodemailer"
import config from "../config";

export default class SendMessage {
   async sendMail(to, subject, message) {
        const transporter = node_email.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: config.user_email,
                pass: config.pass_email,
            },
        });


        async function main() {
            const info = await transporter.sendMail({
                from: config.user_email,
                to: to,
                subject: subject,
                text: message
            });
        }

        main();
    }
}