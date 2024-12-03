
import blogModels from "../models/BlogModels.js"
import termModels from "../models/TermModels.js";
import serviceModels from '../models/ServiceModels.js';
import formModels from "../models/FormModels.js";

export const PublicBlogController = async (req, res) => {

    console.log( req.params.remark)
    try{

        let prams = req.params.remark
        
        
        let MatchStage= {$match:{remark:prams}};

        let result = await  blogModels.aggregate([
            MatchStage
        ]);

        return res.json({Status:"Success", data:result});
    }
    catch(err){
        return res.json({Status:"fail",  Error:err.toString(err)});
    }

}

export const PublicTeamController = async (req, res) => {

    try{

        let result = await  termModels.find()

        return res.json({Status:"Success", data:result});
    }
    catch(err){
        return res.json({Status:"fail",  Error:err.toString(err)});

    }
}

export const PublicServiceController = async (req, res) => {

    try{

        let result = await  serviceModels.find()

        return res.json({Status:"Success", data:result});
    }
    catch(err){
        return res.json({Status:"fail",  Error:err.toString(err)});

    }
}

export const PublicFormController = async (req, res) => {

    try{

        let body = req.body;

        await  formModels.create(body)

        return res.json({Status:"Success"});
    }
    catch(err){
        return res.json({Status:"fail",  Error:err.toString(err)});

    }
}