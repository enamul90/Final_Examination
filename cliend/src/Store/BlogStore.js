import {create} from "zustand";
import axios from "axios";
const base_url = "http://localhost:3005/api";
const AllBlogListApi = base_url + "/allBlogList";
const BlogDeleteApi = base_url + "/deleteBlog/";
const BlogCreateApi = base_url + "/createBlog";
const BlogDetailCreateApi = base_url + "/createBlogDetail/";
const BlogUpdateApi = base_url + "/updateBlog/";
const BlogDetailReadApi = base_url + "/readBlogDetail/";

let token = {
    headers: {
        token: sessionStorage.getItem("token")
    }
}
const BlogStore  = create((set)=>({
    AllBlogList :null,
    AllBlogListReq: async ()=>{
        let res = await axios.get(AllBlogListApi, token);
        set({
            AllBlogList : res.data['data']
        });
    },

    BlogDeleteReq : async (id)=>{
        let res = await axios.delete(BlogDeleteApi+id, token)
        if(res.status === 200){
            return true
        }
    },

    BlogCreateFormData :{
        remark:"",
        img:"",
        sub_dis:"",
        title:"",
        id: null
    },
    SetBlogCreateFormData : (name,value)=> {
        set((state) => ({
            BlogCreateFormData: {
                ...state.BlogCreateFormData, [name]: value
            }
        }))
    },

    BlogCreateReq : async (body)=>{
        let data =  await axios.post ( BlogCreateApi ,body ,token)

       return data
    },

    BlogDetailCreateFormData :{
        id: null,
        blog_des1: "",
        blog_des2: ""

    },
    SetBlogDetailCreateFormData : (name,value)=> {
        set((state) => ({
            BlogDetailCreateFormData: {
                ...state.BlogDetailCreateFormData, [name]: value
            }
        }))
    },

    BlogDetailCreateReq : async (id,body)=>{

        let res = await axios.post ( BlogDetailCreateApi+id ,body ,token)
        if(res.status === 200){
            return true
        }
    },



    BlogUpdateReq : async (id,body)=>{
        let res = await axios.post ( BlogUpdateApi+id ,body ,token)
        if(res.status === 200){
            return true
        }
    },

    BlogDetailReq: async (id)=>{
        let res = await axios.get(BlogDetailReadApi + id, token);

        if(res.status === 200){
            return (res.data['data'])
        }

    },


}))

export default BlogStore;