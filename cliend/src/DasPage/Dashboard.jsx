import DasLayout from "../DasLayout/DasLayout.jsx";
import DasBlogComponent from "../DasComponent/blog/DasBlogComponent.jsx";
import Sidebar from "../DasComponent/sidebar/Sidebar.jsx";
import DasTeam from "../DasComponent/Team/DasTeam.jsx";
import DasService from "../DasComponent/service/DasService.jsx";
import DasFormData from "../DasComponent/formData/DasFormData.jsx";
import DashboardManageStore from "../Store/DashboardManageStore.js";
import AddService from "../DasComponent/service/AddService.jsx";


const Dashboard = () => {

    const {   BlogManage , TeamManage , ServiceManage , FormManage} = DashboardManageStore()


    return (
        <DasLayout>
            <div className="dashboard container">
                <div className="row w-100 mt-4">
                    <div className="col-3">
                            <Sidebar />
                    </div>
                    <div className="col-9">
                        {
                            BlogManage? <DasBlogComponent /> : null
                        }
                        {
                            TeamManage? <DasTeam /> : null
                        }

                        {
                            ServiceManage? <DasService />: null
                        }
                        {
                            FormManage? <DasFormData /> : null
                        }

                    </div>
                </div>
            </div>

        </DasLayout>
    );
};

export default Dashboard;