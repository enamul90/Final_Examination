import {create} from "zustand";

const DashboardManageStore  = create((set)=>({

    BlogManage : true,
    TeamManage : false,
    ServiceManage : false,
    FormManage : false,

    BlogSettings : (e)=>{
        set({BlogManage:e})
    },
    TeamSettings : (e)=>{
        set({TeamManage:e})
    },
    ServiceSettings : (e)=>{
        set({ServiceManage:e})
    },
    FormSettings : (e)=>{
        set({FormManage:e})
    },

}))

export default DashboardManageStore;