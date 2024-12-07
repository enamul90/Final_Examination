import {create} from "zustand";
import axios from "axios";

const base_url = "https://vercel-deploy-exm-blog.vercel.app/api";
const BlogListApi = base_url + "/blogList/";
const TeamListApi = base_url + "/teamList";
const ServiceListApi = base_url + "/service";
const FormSubmitApi = base_url + "/contactFrom";
const BlogDetailApi = base_url + "/blogDetail/";

const PublicStore  = create((set)=>({

    BlogList:null,
    HomeBlogListReq: async ()=>{
        let res = await axios.get(BlogListApi + "home");
        set({BlogList:res.data['data']})
    },

    RemarkBlogListReq: async (e)=>{
        let res = await axios.get(BlogListApi + e);
        set({BlogList:res.data['data']})
    },

    TeamList:null,
    TeamListReq: async ()=>{
        let res = await axios.get(TeamListApi);
        set({TeamList:res.data['data']})
    },

    ServiceList:null,
    ServiceListReq: async ()=>{
        let res = await axios.get(ServiceListApi);
        set({ServiceList:res.data['data']})
    },

    FormData:null,
    FormHandel:(name,value)=> {
        set((state) => ({
            FormData: {
                ...state.FormData, [name]: value
            }
        }))
    },
    FormReq:async (FormData)=>{
       let res =  await axios.post(FormSubmitApi,FormData)
        return res.status===200
    },

    BlogDetails:null,
    BlogDetailsReq: async (id)=>{
        let res = await axios.get(BlogDetailApi+id)

        set({BlogDetails:res.data['data']})
    }
}))


export default PublicStore;