import {create} from "zustand";
import axios from "axios";
const base_url = "http://localhost:3005/api";
const FormApi = base_url + "/allTeamList";

const FormStore  = create((set)=>({

    FormData : null,
    FormReq : async ()=>{

        let token = {
            headers: {
                token: sessionStorage.getItem("token")
            }
        }
        let res = await axios.get(FormApi, token);
        set({FormData : res.data['data']})

    },




}))

export default FormStore;