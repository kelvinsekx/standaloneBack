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

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

app.use("/", authRoutes)
app.use("/", userRoutes)
app.get("/", (req, res) => {
    res.status(200).send(Template())
})

app.use((err, req, res, next)=> {
    if (err.name === "UnauthorizedError"){
        res.status(401).json({"error": err.name})
    }
})

export default app;