import SendMessage from "../models/send_email";

const send_email = new SendMessage();
export default class SendEmail{
    
    validateData(to, subject, message){
        send_email.sendMail(to, subject, message);
    }
}