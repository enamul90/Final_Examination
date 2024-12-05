import DasLayout from "../DasLayout/DasLayout.jsx";
import DasBlogComponent from "../DasComponent/blog/DasBlogComponent.jsx";
import Sidebar from "../DasComponent/sidebar/Sidebar.jsx";
import DasTeam from "../DasComponent/Team/DasTeam.jsx";
import DasService from "../DasComponent/service/DasService.jsx";
import DasFormData from "../DasComponent/formData/DasFormData.jsx";


const Dashboard = () => {
    return (
        <DasLayout>
            <div className="dashboard container">
                <div className="row w-100 mt-4">
                    <div className="col-3">
                            <Sidebar />
                    </div>
                    <div className="col-9">
                        <DasBlogComponent />
                        <DasTeam />
                        <DasService />
                        <DasFormData />
                    </div>
                </div>
            </div>

        </DasLayout>
    );
};

export default Dashboard;