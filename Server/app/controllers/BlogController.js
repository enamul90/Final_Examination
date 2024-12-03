import BlockModels from "../models/BlogModels.js"


export const createBlockController = async (req, res)=>{
    try{
        
        let reqBody = req.body;

        await BlockModels.create(reqBody);
        return res.json({status:"Blog create successfully"});
    }
    catch(err){
        return res.json({status:"fail", Message:"Blocklist failed", Error:err.toString()});
    }

}

export const createBlockDetailController = async (req, res)=>{
    try{
        
        let reqBody = req.body;
        reqBody.blockId = req.params.id;

        await UsersModels.create(reqBody);
        return res.json({status:"Blog Detail create successfully"});
    }
    catch(err){
        return res.json({status:"fail", Message:"Blog create failed", Error:err.toString()});
    }

}


export const blocklistController = async (req, res)=>{
    try{
        
        let MatchStage= {$match:{ }};

        let result = await  BlockModels.aggregate([
            MatchStage
        ]);
        
        return res.json({status:"Success", data:result});
    }
    catch(err){
        return res.json({status:"fail", Message:"Blocklist failed", Error:err.toString()});
    }

}