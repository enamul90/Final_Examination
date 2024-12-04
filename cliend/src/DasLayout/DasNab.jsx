
import logo from "../assets/logo/logo.png"
import "../assets/css/dash.css"

const DasNab = () => {
    return (
        <div className="DasNab bg-light sticky-top top-0 ">
            <div className="container py-3">
                <div className="logo-container">
                    <img src={logo} alt="logo"/>
                    <h4 className="mt-1">Dashboard</h4>
                </div>

                <img src={logo} alt="logo"/>
            </div>
        </div>
    );
};

export default DasNab;