import AppNav from "./AppNav.jsx";
import Footer from "./Footer.jsx";


const Layout = (props) => {
    return (
        <>
            <AppNav/>
            <div className="min-vh-100">{props.children}</div>
            <Footer/>
        </>
    );
};

export default Layout;