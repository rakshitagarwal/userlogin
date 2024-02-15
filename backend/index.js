const express = require("express");
const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes"); 
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");

const dirname = path.resolve();

const app = express();
const mongoose = require("mongoose");

app.use(express.json());

app.use(cors());

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) =>{
    res.send("Notes API From CheezyCode");
});

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(dirname, "/frontend/build")));

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server started on port no. " + PORT);
    });
})
.catch((error)=>{
    console.log(error);
})


