require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const connectDB = require("./utils/db");
const errorMiddleware = require("./models/error-middleware");


//cors
const corsOptions = {
    origin: "http://localhost:5173",
    method: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth" , authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

app.use(errorMiddleware);

// app.get("/",(req,res) => {
//     res.status(200).send("this is mern stack")
// });
// app.get("/signup",(req,res) => {
//     res.status(200).send("this is signup")
// });

const PORT = 5000;

connectDB().then(() => {
app.listen(PORT,() => {
    console.log(`server is running at port: ${PORT}`);
});
});