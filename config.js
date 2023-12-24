import { config } from "dotenv"

config();

export default {
    port: process.env.PORT,
    user_email: process.env.user_email,
    pass_email: process.env.pass_email,
}