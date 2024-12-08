import logo from '../assets/logo/logo.png'
import {Link} from "react-router-dom";

const AppNav = () => {
    return (
        <>

            <nav className="navbar bg-body-tertiary sticky-top top-0">
                <div className="container flex-column flex-md-row">
                    <Link className="navbar-brand" to={"/"}>
                        <img className="logo" src={logo} alt="logo"/>
                    </Link>

                    <ul className="navbar-nav ms-md-auto d-md-flex flex-row  pe-3">
                        <Link className={location.pathname === "/" ? "fw-semibold" : "ms-3"} to={"/"}>
                            <a className="nav-link " aria-current="page">Home</a>
                        </Link>
                        <Link className={`ms-3  ${location.pathname === "/blog" ? "fw-semibold" : "ms-3"}`}
                              to={"/blog"}>
                            <a className="nav-link">Blog</a>
                        </Link>
                        <Link className={`ms-3  ${location.pathname === "/about" ? "fw-semibold" : "ms-3"}`}
                              to={"/about"}>
                            <a className="nav-link">About</a>
                        </Link>
                        <Link className={`ms-3  ${location.pathname === "/contact" ? "fw-semibold" : "ms-3"}`}
                              to={"/contact"}>
                            <a className="nav-link">Contact</a>
                        </Link>
                        <Link className={`ms-3  ${location.pathname === "/service" ? "fw-semibold" : "ms-3"}`}
                              to={"/service"}>
                            <a className="nav-link">Service</a>
                        </Link>

                    </ul>

                </div>
            </nav>
        </>
    );
};

export default AppNav;