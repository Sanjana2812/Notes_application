import mongoose from "mongoose";
// created a schema
const noteSchema = new mongoose.Schema(
{
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
    },
    {timestamps: true}//craeted at ,updated at

);
//model based off that schema
const Note = mongoose.model("Note", noteSchema);

export default Note