import express from 'express';
import bodyParser from 'body-parser';
import mongoose  from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app=express();

app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));
app.use(cors());

app.use('/posts',postRoutes);

const CONNECTION_URL='mongodb+srv://JaskaranSingh:Myfamily1801253@cluster0.npbn4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT=process.env.port||5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log('Server up and running')))
.catch((err)=>console.log(err));

