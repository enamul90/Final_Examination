

import "../../assets/css/side.css"
import logo from '../../assets/logo/logo.png';
const Sidebar = () => {


    return (
        <div className="sidebar py-5 px-4 bg-white shadow-lg rounded-1 h-100">
            <img className="side-logo  d-block m-auto" src={logo} alt="logo" />

            <ul className="nav mt-5 pt-2 d-block">
                <li className="nav-item mt-2 fs-5 ">Blog List</li>
                <li className="nav-item mt-2 fs-5 ">Team List</li>
                <li className="nav-item mt-2 fs-5 ">Service List</li>
                <li className="nav-item mt-2 fs-5 "> Form Data</li>
            </ul>
        </div>
    );
};

export default Sidebar;