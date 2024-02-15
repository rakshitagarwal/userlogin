import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
// import bookRoutes from "./routes/booksRoute.js";
import noteRouter from "./routes/noteRoutes.js";
import userRouter from "./routes/userRoutes.js"; 
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

// app.get("/", (request, response) => {
//   console.log(request);
//   return response.status(234).send("welcome to MERN project");
// });

// app.use("/books", bookRoutes);
app.use("/users", userRouter);
app.use("/note", noteRouter);

// const PORT = process.env.PORT || 5555;

app.use(express.static(path.join(dirname, "/frontend/build")));

mongoose.connect(mongoDBURL)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server started on port no. " + PORT);
    });
})
.catch((error)=>{
    console.log(error);
})
