import SendEmail from '../controller/send_email';
import express from 'express';

const router = express.Router();
const send_email = new SendEmail();

router.post('/', (req, res) => {
    send_email.validateData(req.body.to, req.body.subject, req.body.message);
    res.send(true)
})

module.exports = router;