import ContractFromModels from "../models/FormModels.js"
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

export const FormListController = async (req, res)=>{
    try{
        
        let MatchStage= {$match:{ }};

        let result = await  ContractFromModels.aggregate([
            MatchStage
        ]);
        
        return res.json({status:"Success", data:result});
    }
    catch(err){
        return res.json({status:"fail", Message:"Blocklist failed", Error:err.toString()});
    }

}

export const deleteFormController = async (req, res)=>{
    try{
        let id = new ObjectId(req.params.id)

        await ContractFromModels.deleteOne({"_id":id})
        return res.json({status:"Success",});
    }
    catch(err){
        return res.json({status:"fail", Error:err.toString()});
    }
}