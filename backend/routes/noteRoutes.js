import express from "express";
import { getNotes, createNote, deleteNote, updateNote } from "../controllers/noteController.js";
import auth from "../middlewares/auth.js";
const noteRouter = express.Router();

noteRouter.get("/", auth, getNotes);

noteRouter.post("/", auth, createNote);

noteRouter.delete("/:id", auth, deleteNote);

noteRouter.put("/:id", auth, updateNote);

export default noteRouter;