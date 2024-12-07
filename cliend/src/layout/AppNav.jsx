import logo from '../assets/logo/logo.png'
import {Link} from "react-router-dom";

const AppNav = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary sticky-top top-0">
                <div className="container">
                    <Link className="navbar-brand" to={"/"}>
                        <img className="logo" src={logo} alt="logo"/>
                    </Link>

                    <ul className="navbar-nav ms-auto d-none  d-md-flex flex-row  pe-3">
                        <Link className={location.pathname === "/" ? "fw-semibold" : "ms-3"} to={"/"}>
                            <a className="nav-link " aria-current="page" >Home</a>
                        </Link>
                        <Link className={`ms-3  ${location.pathname === "/blog" ? "fw-semibold" : "ms-3"}` } to={"/blog"}>
                            <a className="nav-link" >Blog</a>
                        </Link>
                        <Link className={`ms-3  ${location.pathname === "/about" ? "fw-semibold" : "ms-3"}`} to={"/about"}>
                            <a className="nav-link" >About</a>
                        </Link>
                        <Link className={`ms-3  ${location.pathname === "/contact" ? "fw-semibold" : "ms-3"}`}  to={"/contact"}>
                            <a className="nav-link" >Contact</a>
                        </Link>
                        <Link className={`ms-3  ${location.pathname === "/service" ? "fw-semibold" : "ms-3"}`} to={"/service"}>
                            <a className="nav-link">Service</a>
                        </Link>

                    </ul>

                    <button className="navbar-toggler d-md-none" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
                         aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                <img className="logo" src={logo} alt="logo"/>
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <Link className="nav-item" to={"/"}>
                                    <a className="nav-link active" aria-current="page" >Home</a>
                                </Link>
                                <Link className="nav-item" to={"/blog"}>
                                    <a className="nav-link" >Blog</a>
                                </Link>
                                <Link className="nav-item" to={"/about"}>
                                    <a className="nav-link" >About</a>
                                </Link>
                                <Link className="nav-item" to={"/service"}>
                                    <a className="nav-link" >Service</a>
                                </Link>
                                <Link className="nav-item"  to={"/service"}>
                                    <a className="nav-link" >Contact</a>
                                </Link>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default AppNav;