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

    static async update(id,wilder){
        try {

            const {name, city, skills} = wilder;
            const wilderToUpdate = {
                name,
                city,
                skills
            };

            return await Wilder.findByIdAndUpdate(id, wilderToUpdate, { runValidators: true });
        }catch(err){
            if(err.errors){
                throw Tools.listErrors(err);
            } 
            else{
                throw "Error updating the wilder !";
            }
        }
    }

    static async delete(id){
        try {
            return await Wilder.findOneAndDelete({__id : id});
        }catch(err){
            throw "Error deleting the wilder !";
        }
    }
}