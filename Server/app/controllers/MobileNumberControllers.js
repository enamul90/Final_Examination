
import MobileNumber from "../models/MobileNumberModels.js";



export const CreateNumber = async (req, res) => {

    try{

        let reqBody = req.body;
        let type = req.headers.type

        reqBody.addData = req.headers.type

        console.log(reqBody)
       
        await  MobileNumber.create(reqBody)
        return res.json({Status:"Success", Message:"Create Number Successfully"});
    }
    catch(err){
        return res.json({Status:"fail", Message:"Task Number Failed", Error:err.toString()});

    }

}

export const ReadNumber = async (req, res) => {
    try{
        let gender = req.body['gender'];
        let MatchStage= {$match:{gender:gender}};

        let result = await  MobileNumber.aggregate([
            MatchStage
        ]);

        return res.json({Status:"Success", data:result});
    }
    catch(err){
        return res.json({Status:"fail", Message:"Task Create Failed", Error:err.toString()});

    }

}

export const UpdateNumber = async (req, res) => {
    try{
        
        const id = req.body['id']
        let {name,age,gender,mobileNumber} = req.body


        if(req.headers.type == "Admin"){
            await MobileNumber.updateOne({"_id" : id},{"name": name,"age" :age,"gender":gender,"mobileNumber":mobileNumber})
            return res.json({Status:"Success"});
        }
        else{
            return res.json({Status:"fail"});
        }
    }
    catch(err){
        return res.json({Status:"fail", Message:"Task Create Failed", Error:err.toString()});

    }

}
export const DeleteNumber = async (req, res) => {
    try{
        
        const id = req.body['id']
    

        if(req.headers.type == "Admin"){
            await MobileNumber.deleteOne({"_id":id})
            return res.json({Status:"Success"});
        }
        else{
            return res.json({Status:"fail"});
        }
    }
    catch(err){
        return res.json({Status:"fail", Message:"Task delete Failed", Error:err.toString()});

    }

}


