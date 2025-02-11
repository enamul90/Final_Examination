import logo from "../assets/logo/logo.png"
import "../assets/css/dash.css"
import {useNavigate} from "react-router-dom";


const DasNab = () => {
    const Navigate = useNavigate();



    return (
        <div className="DasNab bg-light shadow-sm sticky-top top-0">
            <div className="container d-flex justify-content-between align-items-center py-3">
                <div onClick={() => Navigate("/dashboard")} className="logo-container btn d-flex align-items-center gap-2">
                    <img src={logo} alt="Logo" className="logo-img" />
                    <h4 className="mt-1 mb-0">Dashboard</h4>
                </div>
                <div className="auth-container">
                    {sessionStorage.getItem("token") ? (
                        <button className="btn btn-secondary px-3" onClick={() => { sessionStorage.clear(); Navigate("/login"); }}>Sign out</button>
                    ) : (
                        <button className="btn btn-secondary px-3" onClick={() => Navigate("/login")}>Login</button>
                    )}
                </div>
            </div>
        </div>

    );
};

export default DasNab;