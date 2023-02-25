import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import userRoutes from './routes/users.js'
const app = express();
const port = 4001

app.use(bodyParser.json());


app.use("/", userRoutes)

app.get("/",(req,res)=>{
    res.send("hey iam express server ")
})

app.all("*", (req,res)=>{
    res.send("invalid route")
})

app.use(cors({origin:"*"}));

// app.use(cors({
//   origin: 
// }));

// app.use(cors({origin: true, credentials: true}));

app.listen(port,()=>{
    console.log("API server is live")
})