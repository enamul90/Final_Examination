import {create} from "zustand";
import axios from "axios";

const base_url = "https://vercel-deploy-exm-blog.vercel.app/api";
const RegistrationApi = base_url + "/Registration";
const LoginApi = base_url + "/Login";

const UserStore  = create((set)=>({

    RegistrationFormData:null,
    RegistrationFormDataSet: (name,value)=> {
        set((state) => ({
            RegistrationFormData: {
                ...state.RegistrationFormData, [name]: value
            }
        }))
    },

    RegistrationReq : async (body)=>{
        let res = await axios.post(RegistrationApi, body);
        return res.status===200
    },


    LoginFormData:null,
    LoginFormDataSet: (name,value)=> {
        set((state) => ({
            LoginFormData: {
                ...state.LoginFormData, [name]: value
            }
        }))
    },

    LoginReq : async (body)=>{
        let res = await axios.post(LoginApi, body);
        return res.data
    }


}))

export default UserStore;