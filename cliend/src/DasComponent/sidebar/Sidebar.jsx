

import "../../assets/css/side.css"
import logo from '../../assets/logo/logo.png';
import {useRef} from "react";
import DashboardManageStore from "../../Store/DashboardManageStore.js";
const Sidebar = () => {

    const { BlogSettings , TeamSettings , ServiceSettings ,FormSettings , }= DashboardManageStore()

    let BlogRef = useRef();
    let TeamRef = useRef();
    let ServiceRef = useRef();
    let FormRef = useRef();

    const BlogHeader =()=>{
        BlogRef.className= "nav-item mt-2 fs-5 text-primary";
        TeamRef.className= "nav-item mt-2 fs-5";
        ServiceRef.className= "nav-item mt-2 fs-5";
        FormRef.className= "nav-item mt-2 fs-5";
        BlogSettings(true)
        TeamSettings(false)
        ServiceSettings(false)
        FormSettings(false)
    }
    const TeamHeader =()=>{
        BlogRef.className= "nav-item mt-2 fs-5";
        TeamRef.className= "nav-item mt-2 fs-5 text-primary";
        ServiceRef.className= "nav-item mt-2 fs-5";
        FormRef.className= "nav-item mt-2 fs-5";
        BlogSettings(false)
        TeamSettings(true)
        ServiceSettings(false)
        FormSettings(false)

    }
    const ServiceHeader =()=>{
        BlogRef.className= "nav-item mt-2 fs-5";
        TeamRef.className= "nav-item mt-2 fs-5";
        ServiceRef.className= "nav-item mt-2 fs-5 text-primary";
        FormRef.className= "nav-item mt-2 fs-5";
        BlogSettings(false)
        TeamSettings(false)
        ServiceSettings(true)
        FormSettings(false)

    }
    const FormHeader =()=>{
        BlogRef.className= "nav-item mt-2 fs-5";
        TeamRef.className= "nav-item mt-2 fs-5";
        ServiceRef.className= "nav-item mt-2 fs-5";
        FormRef.className= "nav-item mt-2 fs-5 text-primary";
        BlogSettings(false)
        TeamSettings(false)
        ServiceSettings(false)
        FormSettings(true)

    }

    return (
        <div className="sidebar py-5 px-4 bg-white border-1 border rounded-1 h-100">
            <img className="side-logo  d-block m-auto" src={logo} alt="logo" />

            <ul className="nav mt-5 pt-2 d-block">
                <li
                    ref={(a)=>BlogRef=a}
                    onClick={BlogHeader}
                    className="nav-item mt-2 fs-5 text-primary "
                >
                    Blog List
                </li>
                <li
                    ref={(a)=>TeamRef=a}
                    onClick={TeamHeader}
                    className="nav-item mt-2 fs-5 ">Team List</li>
                <li
                    ref={(a)=> ServiceRef=a}
                    onClick={ ServiceHeader}
                    className="nav-item mt-2 fs-5 ">Service List</li>
                <li
                    ref={(a)=>FormRef=a}
                    onClick={FormHeader}
                    className="nav-item mt-2 fs-5 "> Form Data</li>
            </ul>
        </div>
    );
};

export default Sidebar;