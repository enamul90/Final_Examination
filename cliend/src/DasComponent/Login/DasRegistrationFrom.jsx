import "../../assets/css/dash.css"
import {useNavigate} from "react-router-dom";
import UserStore from "../../Store/UserStore.js";
import toast from "react-hot-toast";

const DasLoginFrom = () => {
    const navigate = useNavigate();

    let {RegistrationFormData, RegistrationReq,   RegistrationFormDataSet} = UserStore()

    const FormSubmit =  async (e)=>{
        e.preventDefault();
        let res =  await  RegistrationReq(RegistrationFormData);
        if(res){
            navigate("/login")
        }
        else {
            toast.error("Form submit failed")
        }
    }


    return (

        <div className="dasLogin ms-auto">

            <form  onSubmit={FormSubmit} className="dasLogin-form w-100 card p-4  pb-3 mt-5">
                <h3 className="mb-4">Registration Form</h3>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        onChange={(e) => {RegistrationFormDataSet("name", e.target.value)}}
                         className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Profile Image</label>
                    <input
                        onChange={(e) => {RegistrationFormDataSet("img", e.target.value)}}
                        className="form-control"
                        required
                    />
                </div>
                <div className="d-flex gap-4 ">
                    <div className="mb-3">
                        <label className="form-label">Email Address</label>
                        <input
                            onChange={(e) => {RegistrationFormDataSet("email", e.target.value)}}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            onChange={(e) => {RegistrationFormDataSet("password", e.target.value)}}
                            type="password" className="form-control"
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <h6 onClick={()=>{ navigate("/login")}} className=" mt-2 text-center btn">I already have an account.</h6>
            </form>

        </div>
    );
};

export default DasLoginFrom;