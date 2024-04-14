import express from 'express';
import usersRouter from './routes/users.js';
import mongoose  from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

const CONNECTION_URL = 'mongodb://localhost:27017/corsoapinode';

app.use(express.json());
app.use(cors())
app.use('/users',usersRouter);
app.get('/',(req,res)=>{
    res.send("benvenuto nella home page");
});

mongoose.connect(CONNECTION_URL).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`)
    })
}).catch((error)=>{
    console.error(error)
})

