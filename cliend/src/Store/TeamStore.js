import {create} from "zustand";
import axios from "axios";

const base_url = "http://localhost:3005/api";
const AllTeamListApi = base_url + "/allTeamList";
const TeamListDeleteApi = base_url + "/deleteTeam/";
const TeamListCreateApi = base_url + "/createTeam";
const TeamListUpdateApi = base_url + "/updateTeam/";

let token = {
    headers: {
        token: sessionStorage.getItem("token")
    }
}
const TeamStore  = create((set)=>({
    AllTeamList : null,
    AllTeamListReq : async ()=>{
        let res = await axios.get(AllTeamListApi, token);
        if(res.status === 200){
            set({AllTeamList : res.data['data']})
        }
    },

    TeamListDeleteReq: async (id)=>{
        let res = await axios.delete(TeamListDeleteApi + id ,token)
        if(res.status === 200){
            return true
        }
    },


    TeamFormData :{
        id : null,
        name: "",
        comment:" ",
        department: "",
        img :""
    },
    SetTeamFormData : (name,value)=> {
        set((state) => ({
            TeamFormData: {
                ...state.TeamFormData, [name]: value
            }
        }))
    },

    TeamFormCreateReq : async (body)=>{
        let res =  await axios.post ( TeamListCreateApi ,body ,token)
        if(res.status === 200){
            return true
        }
    },

    TeamFormUpdateReq : async (body)=>{
        const {id } = body;
        let res =  await axios.post ( TeamListUpdateApi+id ,body ,token)
        if(res.status === 200){
            return true
        }
    }


}))

export default TeamStore ;