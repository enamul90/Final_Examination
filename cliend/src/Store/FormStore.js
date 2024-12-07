import {create} from "zustand";
import axios from "axios";
const base_url = "https://vercel-deploy-exm-blog.vercel.app/api";
const FormApi = base_url + "/allContractFromList";
const DeleteFormApi = base_url + "/deleteContractFrom/";



let token = {
    headers: {
        token: sessionStorage.getItem("token")
    }
}
const FormStore  = create((set)=>({

    DasFormData : null,
    DasFormReq : async ()=>{

        let res = await axios.get(FormApi, token);
        set({DasFormData : res.data['data']})

    },

    DasFormDelete : async (e)=>{
        let res = await axios.delete(DeleteFormApi + e,token);
        return res.status===200
    }


}))

export default FormStore;