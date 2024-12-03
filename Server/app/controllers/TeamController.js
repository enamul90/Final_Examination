import TeamModels from "../models/TeamModels.js"
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

export const createTeamController = async (req, res)=>{
    try{
        
        let reqBody = req.body;
        await TeamModels.create(reqBody);
        return res.json({status:"Blog create successfully"});
    }
    catch(err){
        return res.json({status:"fail", Message:"Blocklist failed", Error:err.toString()});
    }

}


export const TeamListController = async (req, res)=>{
    try{
        
        let MatchStage= {$match:{ }};

        let result = await  TeamModels.aggregate([
            MatchStage
        ]);
        
        return res.json({status:"Success", data:result});
    }
    catch(err){
        return res.json({status:"fail", Message:"Blocklist failed", Error:err.toString()});
    }

}

export const updateTeamController = async (req, res)=>{
    try{
        let id = new ObjectId(req.params.id)
        let reqBody = req.body
        let {name,comment,img, department} = reqBody
        
        let Body= {
            name:name,
            comment: comment,
            department: department,
            img : img,
        }


        await TeamModels.updateOne( {_id:id},{$set:Body}, {upsert:true} )
        return res.json({status:"Success"});
    }
    catch(err){
        return res.json({status:"fail", Error:err.toString()});
    }

}

export const deleteTeamController = async (req, res)=>{
    try{
        let id = new ObjectId(req.params.id)
        let blogID = req.params.id;


        await TeamModels.deleteOne({"_id":id})
        return res.json({status:"Success",});
    }
    catch(err){
        return res.json({status:"fail", Error:err.toString()});
    }
}