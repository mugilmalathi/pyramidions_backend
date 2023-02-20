const movieModel = require("../model/movies.model");

module.exports = {
    list: async () =>{
        try{
            let records = await movieModel.find().lean().exec();
            return records;
        }
        catch (ex){
            throw ex;
        }
    },

    get: async(id) =>{
        try{
            let record = await movieModel.findById(id);
            return record;
        }
        catch (ex){
            throw ex;
        }
    },

    create: async (fields) =>{
        try{
            let record = await movieModel.create(fields);
            return record;
        }
        catch (ex){
            throw ex;
        }
    },

    update: async (id, fields) => {
        try{
            let record = await movieModel.findByIdAndUpdate(id, fields);
            return record;
        }
        catch (ex){
            throw ex;
        }
    },

    delete: async (id) =>{
        try{
            let record = await movieModel.findByIdAndDelete(id, {deleted: true});
            return record;
        }
        catch (ex){
            throw ex;
        }
    }
}