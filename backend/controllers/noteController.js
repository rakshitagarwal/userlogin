import Note from "../models/note.js";

const createNote = async (req, res) =>{
    
    const {title, description} = req.body;

    const newNote = new Note({
        title: title,
        description : description,
        userId : req.userId
    });

    try {
        
        await newNote.save();
        res.status(201).json(newNote);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
    
}

const updateNote = async (req, res) =>{
    const id = req.params.id;
    const {title, description} = req.body;

    const newNote = {
        title : title,
        description: description,
        userId : req.userId
    }

    try {
        await Note.findByIdAndUpdate(id, newNote, {new : true});
        res.status(200).json(newNote);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }

}

const deleteNote = async (req, res) =>{

    const id = req.params.id;
    try {
        
        const note = await Note.findByIdAndRemove(id);
        res.status(202).json(note);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

const getNotes = async (req, res) =>{
    try {
        
        const notes = await Note.find({userId : req.userId});
        res.status(200).json(notes);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

export {
    createNote,
    updateNote,
    deleteNote,
    getNotes
}