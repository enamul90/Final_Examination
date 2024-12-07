import DasLayout from "../../DasLayout/DasLayout.jsx";
import TeamStore from "../../Store/TeamStore.js";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const AddTeam = () => {
    const navigate = useNavigate();

    let {TeamFormData, SetTeamFormData,  TeamFormCreateReq, TeamFormUpdateReq}= TeamStore()

    const FormSubmitHandel = async (e) => {
        e.preventDefault()
        if(TeamFormData.id ===null){
            let res = await TeamFormCreateReq(TeamFormData)
            if(res){
                toast.success("Team created successfully.")
                SetTeamFormData("id", "")
                SetTeamFormData("name","")
                SetTeamFormData("department","")
                SetTeamFormData("img", "")
                SetTeamFormData("comment", "")
                navigate('/dashboard')
            }
            else{
                toast.error("Team created failed")
            }
        }
        else {

            let res = await TeamFormUpdateReq(TeamFormData)
            if(res){
                toast.success("Team Update successfully.")
                SetTeamFormData("id", "")
                SetTeamFormData("name","")
                SetTeamFormData("department","")
                SetTeamFormData("img", "")
                SetTeamFormData("comment", "")
                navigate('/dashboard')
            }
            else{
                toast.error("Team Update failed")
            }
        }
    }

    return (
        <DasLayout>
            <div className="dasLogin ms-auto">

                <form onSubmit={FormSubmitHandel}  className="dasLogin-form w-100 card p-4  pb-3 mt-5">
                    <h3 className="mb-4">Team Form</h3>

                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            onChange={(e) => {
                                SetTeamFormData("name", e.target.value)
                            }}
                            value={TeamFormData.name}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Image Url</label>
                        <input
                            onChange={(e) => {
                                SetTeamFormData("img", e.target.value)
                            }}
                            value={TeamFormData.img}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Department</label>
                        <input
                            onChange={(e) => {
                                SetTeamFormData("department", e.target.value)
                            }}
                            value={TeamFormData.department}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea
                            onChange={(e) => {
                                SetTeamFormData("comment", e.target.value)
                            }}
                            value={TeamFormData.comment}
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

export default AddTeam;