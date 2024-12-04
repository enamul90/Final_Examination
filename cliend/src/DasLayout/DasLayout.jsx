import DasNab from "./DasNab.jsx";
import DasFooter from "./DasFooter.jsx";

const DasLayout = (props) => {
    return (
        <>
            <DasNab/>
            <div className="min-vh-100">{props.children}</div>
            <DasFooter />
        </>
    );
};

export default DasLayout;