import express from 'express';
import db from './config/database.config';
import router from './Country/route';
import cors from 'cors';

const app = express();
const port = 9000;


db.sync().then(() => {
     console.log('connect to db');
});

app.use(express.json());
app.use(cors());

app.use("/COVID-19/", router)

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})