
import logo from "../assets/logo/logo.png"
import "../assets/css/dash.css"
import {useNavigate} from "react-router-dom";


const DasNab = () => {
    const Navigate = useNavigate();



    return (
        <div className="DasNab bg-light sticky-top top-0 ">
            <div className="container py-3">
                <div  onClick={()=>{Navigate("/dashboard")}} className="logo-container btn">
                    <img src={logo} alt="logo"/>
                    <h4 className="mt-1">Dashboard</h4>
                </div>
                <div className="logo-container">
                    {
                        sessionStorage.getItem("token") ?
                            <button className="btn btn-secondary px-3" onClick={()=>{sessionStorage.clear(); Navigate("/login") }} >Sign out </button>:
                            <button className="btn btn-secondary px-3" onClick={()=>{Navigate("/login")}}>Login</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default DasNab;