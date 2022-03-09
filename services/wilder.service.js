import Wilder from "../models/wilder.model";
import Tools from "../utils/tools";

export default class WilderService {
    static async getAll(){
        try {
            return await Wilder.find();
        }catch(err){
            throw "Error getting wilders !";
        }
    }

    static async getById(_id){
        try {
            return await Wilder.findOne({_id});
        }catch(err){
            throw `Error getting the wilder ${id}!`;
        }
    }

    static async create(wilder){
        try {
            await Wilder.init();

            const {name, city, skills} = wilder;
            const wilderToCreate = new Wilder({
                name,
                city,
                skills
            });
            
            return await wilderToCreate.save();
        }
        catch(err){
            if(err.errors){
                throw Tools.listErrors(err);
            } 
            else{
                throw "Error creating the wilder !";
            } 
        }
        
    }

    static async update(_id,wilder){
        try {

            const {name, city, skills} = wilder;
            const wilderToUpdate = {
                name,
                city,
                skills
            };

            const modif = await Wilder.updateOne({_id}, wilderToUpdate, { runValidators: true });
            if(modif.matchedCount == 0) throw new Error("Wilder doesn't exists !")
            else return this.getById(_id);

        }catch(err){
            if(err.errors){
                throw Tools.listErrors(err);
            }
            else if(err.message){
                throw err.message;
            } 
            else{
                throw "Error updating the wilder !";
            }
        }
    }

    static async delete(_id){
        try {
            const del = await Wilder.deleteOne({_id});
            if(del.deletedCount == 0) throw new Error("Wilder doesn't exists !")
            else return `Wilder ${_id} successfully deleted !`;

        }catch(err){
            if(err.message){
                throw err.message;
            }
            else{
                throw "Error deleting the wilder !";
            }
        }
    }
}