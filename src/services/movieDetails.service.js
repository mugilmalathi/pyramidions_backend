const movieDetails = require("../model/movieDetails.model");

module.exports = {
    list: async () =>{
        try{
            let records = await movieDetails.find().lean().exec();
            return records;
        }
        catch (ex){
            throw ex;
        }
    },

    get: async(id) =>{
        try{
            let record = await movieDetails.findById(id);
            return record;
        }
        catch (ex){
            throw ex;
        }
    },

    create: async (fields) =>{
        try{
            let record = await movieDetails.create(fields);
            return record;
        }
        catch (ex){
            throw ex;
        }
    },

    update: async (id, fields) => {
        try{
            let record = await movieDetails.findByIdAndUpdate(id, fields);
            return record;
        }
        catch (ex){
            throw ex;
        }
    },

    delete: async (id) =>{
        try{
            let record = await movieDetails.findByIdAndDelete(id, {deleted: true});
            return record;
        }
        catch (ex){
            throw ex;
        }
    }
}