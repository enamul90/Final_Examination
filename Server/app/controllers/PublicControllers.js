
import blogModels from "../models/BlogModels.js"
import termModels from "../models/TeamModels.js";
import serviceModels from '../models/ServiceModels.js';
import formModels from "../models/FormModels.js";
import  blogDetailsModels from "../models/BlogDetailModels.js"

import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

export const PublicBlogController = async (req, res) => {

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

export const PublicBlogDetailController = async (req, res) => {

    try{

        let id = req.params.id
        let mid = new ObjectId(id)
        let BlogListMatchStage= {$match:{_id:mid}};
        let BlogDetailMatchStage= {$match:{blogID:id}};

        let blogList = await  blogModels.aggregate([
            BlogListMatchStage
        ]);

        let blogDetail = await  blogDetailsModels.aggregate([
            BlogDetailMatchStage
        ]);


        let result ={
            blogList:blogList[0],
            blogDetail :blogDetail[0]
        }


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