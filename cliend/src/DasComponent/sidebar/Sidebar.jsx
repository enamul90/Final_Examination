

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
        <div className="sidebar py-5 px-4 bg-white border rounded shadow-sm h-100">
            <img className="side-logo d-block mx-auto mb-4" src={logo} alt="Logo" />

            <ul className="nav flex-column">
                <li
                    ref={(a) => (BlogRef = a)}
                    onClick={BlogHeader}
                    className="nav-item py-2 px-3 fs-5 text-primary rounded hover-bg"
                >
                    Blog List
                </li>
                <li
                    ref={(a) => (TeamRef = a)}
                    onClick={TeamHeader}
                    className="nav-item py-2 px-3 fs-5 text-dark rounded hover-bg"
                >
                    Team List
                </li>
                <li
                    ref={(a) => (ServiceRef = a)}
                    onClick={ServiceHeader}
                    className="nav-item py-2 px-3 fs-5 text-dark rounded hover-bg"
                >
                    Service List
                </li>
                <li
                    ref={(a) => (FormRef = a)}
                    onClick={FormHeader}
                    className="nav-item py-2 px-3 fs-5 text-dark rounded hover-bg"
                >
                    Form Data
                </li>
            </ul>
        </div>
    );

};

export default Sidebar;