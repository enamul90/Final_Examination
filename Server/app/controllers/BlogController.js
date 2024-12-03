import blogDetailsModels from "../models/BlogDetailModels.js";
import BlockModels from "../models/BlogModels.js"
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;


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

export const updateBlogController = async (req, res)=>{
    try{
        let id = new ObjectId(req.params.id)
        let reqBody = req.body
        let {tittle,sub_dis,img,remark,} = reqBody
        
        let Body= {
            tittle: tittle,
            sub_dis: sub_dis,
            img: img,
            remark :remark,
        }

        await BlockModels.updateOne( {_id:id},{$set:Body}, {upsert:true} )
        return res.json({status:"Success"});
    }
    catch(err){
        return res.json({status:"fail", Error:err.toString()});
    }

}

export const deleteBlogController = async (req, res)=>{
    try{
        let id = new ObjectId(req.params.id)
        let blogID = req.params.id;


        await BlockModels.deleteOne({"_id":id})
        await blogDetailsModels.deleteOne({"blogID":blogID})
        return res.json({status:"Success",});
    }
    catch(err){
        return res.json({status:"fail", Error:err.toString()});
    }
}



export const createBlockDetailController = async (req, res)=>{
    try{
        let blogID = req.params.id;
        let {blog_des1, blog_des2} = req.body;
        
        let reqBody = {
            blogID: blogID,
            blog_des1:blog_des1,
            blog_des2:blog_des2,
        }

        await blogDetailsModels.updateOne( {blogID:blogID},{$set:reqBody}, {upsert:true} )
        return res.json({status:"Blog Detail create successfully"});
    }
    catch(err){
        return res.json({status:"fail", Message:"Blog create failed", Error:err.toString()});
    }

}

export const readBlogDetailController = async (req, res) => {

    try{

        let id = req.params.id
        let mid = new ObjectId(id)
        let BlogListMatchStage= {$match:{_id:mid}};
        let BlogDetailMatchStage= {$match:{blogID:id}};

        let blogList = await  BlockModels.aggregate([
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
