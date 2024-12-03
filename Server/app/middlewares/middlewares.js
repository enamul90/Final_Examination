import {TokenDecode} from "../utility/utility.js";

export default (req, res, next)=>{

    let token = req.headers['token']; 
    if(!token){
        token = req.cookies['token'];
    }
    let decoded = TokenDecode(token)
    if(decoded===null){
        res.status(401).json({status:'fail',message:"No token found"})
    }
    else{
        let email = decoded.email;
        let type = decoded.type;

        req.headers.email=email;
        req.headers.type=type;
        next()

    }

}