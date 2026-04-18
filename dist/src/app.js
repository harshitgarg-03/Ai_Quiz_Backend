import express from "express";
import dotenv from "dotenv";
import cookiesParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routes/user.route.js";
import bodyParser from "body-parser";
import session from "express-session";
import passport from "./config/passport.js";
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookiesParser());
// cors configrations
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.get("/", (req, res) => {
    res.send({ message: "deployed 🚀" });
});
app.use("/api/v1", authRouter);
export default app;
//# sourceMappingURL=app.js.map