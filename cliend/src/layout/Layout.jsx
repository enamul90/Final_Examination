import AppNav from "./AppNav.jsx";
import Footer from "./Footer.jsx";


const Layout = (props) => {
    return (
        <>
            <AppNav/>
            <div>{props.children}</div>
            <Footer/>
        </>
    );
};

export default Layout;