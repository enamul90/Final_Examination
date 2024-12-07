import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

import ServiceModel from "../models/ServiceModels.js"

export const createServiceController = async (req, res)=>{
    try{
        
        let reqBody = req.body;
        await ServiceModel.create(reqBody);
        return res.json({status:"create successfully"});
    }
    catch(err){
        return res.json({status:"fail", Message:" failed", Error:err.toString()});
    }

}


export const ServiceListController = async (req, res)=>{
    try{
        
        let MatchStage= {$match:{ }};

        let result = await  ServiceModel.aggregate([
            MatchStage
        ]);
        
        return res.json({status:"Success", data:result});
    }
    catch(err){
        return res.json({status:"fail", Message:" failed", Error:err.toString()});
    }

}

export const updateServiceController = async (req, res)=>{
    try{
        let id = new ObjectId(req.params.id)
        let reqBody = req.body
        let {tittle,sub_dis,img,dis} = reqBody
        
        let Body= {
            tittle: tittle,
            sub_dis: sub_dis,
            img: img,
            dis :dis,
        }

        await ServiceModel.updateOne( {_id:id},{$set:Body}, {upsert:true} )
        return res.json({status:"Success"});
    }
    catch(err){
        return res.json({status:"fail", Error:err.toString()});
    }

}

export const deleteServiceController = async (req, res)=>{
    try{
        let id = new ObjectId(req.params.id)
        let blogID = req.params.id;


        await ServiceModel.deleteOne({"_id":id})
        return res.json({status:"Success",});
    }
    catch(err){
        return res.json({status:"fail", Error:err.toString()});
    }
}

