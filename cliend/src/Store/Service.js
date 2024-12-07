import {create} from "zustand";
import axios from "axios";
const base_url = "http://localhost:3005/api";
const AllServiceListApi = base_url + "/allServiceList";
const ServiceListDeleteApi = base_url + "/deleteService/";
const ServiceListCreateApi = base_url + "/createService";
const ServiceListUpdateApi = base_url + "/updateService/";

let token = {
    headers: {
        token: sessionStorage.getItem("token")
    }
}
const ServiceStore  = create((set)=>({
    AllServiceList : null,
    AllServiceListReq : async ()=>{
        let res = await axios.get(AllServiceListApi, token);
        set({AllServiceList : res.data['data']});
    },
    ServiceListDeleteReq : async (id)=>{
        let res = await axios.delete( ServiceListDeleteApi + id, token);
        if(res.status === 200){
            return true
        }
    },

    ServiceFormData :{
        id: null,
        tittle: "",
        sub_dis:"",
        img: "",
        dis:""
    },
    SetServiceFormData : (name,value)=> {
        set((state) => ({
            ServiceFormData: {
                ...state.ServiceFormData, [name]: value
            }
        }))
    },

    ServiceFormCreate : async (body)=>{
        let res =  await axios.post ( ServiceListCreateApi ,body ,token)
        if(res.status === 200){
            return true
        }
    },


    ServiceUpdateReq : async (body)=>{
        const {id} =body
        let res =  await axios.post ( ServiceListUpdateApi+id ,body ,token)
        if(res.status === 200){
            return true
        }
    }


}))

export default ServiceStore;