import express from "express";

import cookieParser from "cookie-parser";
/**please kindly uninstall */
// import  bodyParser from "body-parser";
import compress from "compression";
import helmet from "helmet";
import cors from "cors";

import Template from "./../template"

import userRoutes from "./routes/user.routes"
import authRoutes from "./routes/auth.routes"
 import postRoutes from "./routes/post.routes";

import path from "path"
//only use at dev mood
import devBundle from './devBundle';


const cwd = process.cwd()
const app = express();

devBundle.compile(app);
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

app.use("/dist", express.static(path.join(cwd, 'dist')))

app.use("/", postRoutes);
app.use("/", authRoutes);
app.use("/", userRoutes);
app.get("/", (req, res) => {
    res.status(200).send(Template())
})

app.use((err, req, res, next)=> {
    if (err.name === "UnauthorizedError"){
        res.status(401).json({"error": err.name + ": " + err.message})
    }else if (err) {    
        res.status(400).json({"error" : err.name + ": " + err.message})    
        console.log(err) 
 }
})

export default app;
