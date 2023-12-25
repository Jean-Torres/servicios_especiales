import express from 'express';
import config from './config';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

// seting
app.set('PORT', config.port || 8181);

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.json({ message: '' });
})

app.use('/send_mail/', require('./routers/send_email'))

export default app;