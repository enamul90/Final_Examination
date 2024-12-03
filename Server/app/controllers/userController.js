
import UsersModels from "../models/userModels.js"
import * as Encode from "../utility/utility.js"


export const Registration = async (req, res) => {

    try{
        let reqBody = req.body;

        await UsersModels.create(reqBody);
        return res.json({Status:"Success", Message:"User register Successfully"});

    }
    catch(err){
        return res.json({Status:"fail", Message:"user register failed", Error:err.toString()});
    }
}


export const Login = async (req, res) => {

    try{

        let reqBody = req.body;
        let data = await UsersModels.findOne(reqBody);

        if(data==null){
            return res.json({Status:"fail", Message:"User does not exist"});
        }

        else {
            let token=Encode.TokenEncode(data['email'],data['type'])
            res.cookie('token',token, { maxAge: 10000*60*60, httpOnly: false })
            return res.json({Status:"success", Message:"User login Successfully",data:data, token:token});
        }
    }

    catch(err){
        return res.json({Status:"fail", Message:"user register failed", Error:err.toString()});

    }
}