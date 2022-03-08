import mongoose from "mongoose";

const Schema = mongoose.Schema;

const wilderSchema = new Schema({
    name : {
        type : String,
        unique:true,
        required : [true, "Le nom est requis !"],
        minlength : [5, "Le nom doit au moins faire 5 caractères !"]
    },
    city : {
        type : String,
        required : [true, "La ville est requise !"]
    },
    skills : [
        {
            title : String,
            votes : Number
        }
    ]
});

export default mongoose.model("wilder", wilderSchema);