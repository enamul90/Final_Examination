import {JWT_EXPIRES, JWT_KEY} from "../config/config.js";
import jwt from "jsonwebtoken";

export const TokenEncode = (email,type)=>{
    const KEY=JWT_KEY
    const EXPIRES={expiresIn:JWT_EXPIRES}
    const PAYLOAD={email:email, type:type}

    return jwt.sign(PAYLOAD,KEY,EXPIRES)

}

export const TokenDecode = (token)=>{
    try{
        return jwt.decode(token,JWT_KEY)
    }
    catch (e){
        return null
    }
}