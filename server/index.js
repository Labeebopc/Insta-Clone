const express =require('express')
const bodyParser =require('body-parser')
const cors =require('cors')
const mongoose =require('mongoose')
const postRoutes = require('./routes/postRoutes.js')


const app =express();


app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

app.use("/api/v1/posts",postRoutes )


const CONNECTION_URL = 'mongodb://localhost:27017/instaclone';
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server running on port :${PORT}`))
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>console.log('Database connected Succesfully'))
.catch((error)=> console.log(error.message));