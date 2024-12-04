import {create} from "zustand";
import axios from "axios";

const base_url = "http://localhost:3005/api";
const BlogListApi = base_url + "/blogList/";

const PublicStore  = create((set)=>({

    HomeBlogList:null,
    HomeBlogListReq: async ()=>{
        let res = await axios.get(BlogListApi + "home");
        set({HomeBlogList:res.data});
    },



}))


export default PublicStore;