import "../../assets/css/dash.css"
import {useNavigate} from "react-router-dom";
import UserStore from "../../Store/UserStore.js";
import toast from "react-hot-toast";


const DasLoginFrom = () => {
    const navigate = useNavigate();

    const {   LoginFormData, LoginFormDataSet,  LoginReq } =  UserStore()

    const FormSubmit = async (e)=>{
        e.preventDefault();
        let res =  await  LoginReq(LoginFormData);
        if(res.Status ==='success'){
            let token = res.token
            sessionStorage.setItem("token", token)
            navigate("/dashboard")
            toast.success("Login submit successfully")
        }
        else{
            toast.error("Form submit failed")
        }
    }


    return (
        <div className="dasLogin ms-auto">

            <form
                onSubmit={FormSubmit}
                className="dasLogin-form w-100 card p-4 pb-3 mt-5"
            >
                <h3 className="mb-4">Login Form</h3>
                <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                        onChange={(e)=>LoginFormDataSet('email', e.target.value) }
                        type="email" className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        onChange={(e)=>LoginFormDataSet('password', e.target.value) }
                        type="password" className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <h6 onClick={() => {
                    navigate("/registration")
                }} className=" mt-2 text-center btn">Create New Account</h6>
            </form>

        </div>
    );
};

export default DasLoginFrom;