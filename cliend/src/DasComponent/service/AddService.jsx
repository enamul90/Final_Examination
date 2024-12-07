import DasLayout from "../../DasLayout/DasLayout.jsx";
import "../../assets/css/dash.css"
import ServiceStore from "../../Store/Service.js";
import toast from "react-hot-toast";

const AddService = () => {

    const {SetServiceFormData, ServiceFormData,ServiceFormCreate, ServiceUpdateReq} = ServiceStore()

    const FormHandel = async (e)=>{
        e.preventDefault();
        if(ServiceFormData.id === null){
            let res = await ServiceFormCreate(ServiceFormData)
            if(res){
                toast.success('Add service created successfully!')
            }
            else{
                toast.error('Service created failed!')
            }
        }

        else {
            let res = await ServiceUpdateReq(ServiceFormData)
            if(res){
                toast.success('Update service created successfully!')
            }
            else{
                toast.error('Service Update failed!')
            }
        }

    }

    return (
        < DasLayout>
            <div className="dasLogin ms-auto">

                <form onSubmit={FormHandel} className="dasLogin-form w-100 card p-4  pb-3 mt-5">
                    <h3 className="mb-4">Service Form</h3>

                        <div className="mb-3">
                            <label className="form-label">Add Tittle</label>
                            <input
                                onChange={(e) => {
                                    SetServiceFormData("tittle", e.target.value)
                                }}
                                value={ServiceFormData.tittle}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Service Image Url</label>
                            <input
                                onChange={(e) => {
                                    SetServiceFormData("img", e.target.value)
                                }}
                                value={ServiceFormData.img}
                                className="form-control"
                                required
                            />
                        </div>
                    <div className="mb-3">
                        <label className="form-label">Sub Description</label>
                        <textarea
                            onChange={(e) => {
                                SetServiceFormData("sub_dis", e.target.value)
                            }}
                            value={ServiceFormData.sub_dis}
                            className="form-control"
                            rows="3"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea
                            onChange={(e) => {
                                SetServiceFormData("dis", e.target.value)
                            }}
                            value={ServiceFormData.dis}
                            className="form-control"
                            rows="4"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </DasLayout>
    );
};

export default AddService;