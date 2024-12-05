import PublicStore from "../../Store/PublicStore.js";
import toast from "react-hot-toast";


const ContactForm = () => {

    const {FormData, FormHandel,FormReq} = PublicStore()

    const FormSubmit = async (e)=>{
        e.preventDefault();
       let res =  await FormReq(FormData)

        if(res){
            toast.success("Form submit successfully")
        }
        else{
            toast.error("Form submit failed")
        }

    }

    return (
        <form onSubmit={FormSubmit} className="contact-form mt-5 pt-3">

            <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                    onChange={(e) =>FormHandel('name', e.target.value) }
                    type={"text"}
                    className="form-control"
                    placeholder="Md Enamul Firoz "
                />
            </div>
            <div className="mb-3">
                <label className="form-label">E - Mail</label>
                <input
                    onChange={(e) =>FormHandel('email', e.target.value) }
                    type={"email"}
                    className="form-control"
                    placeholder="email@mail.com"
                />
            </div>
            <div className="mb-4">
                <label className="form-label">Your Comment</label>
                <textarea
                    onChange={(e) =>FormHandel('comment', e.target.value) }
                    className="form-control"
                    rows="4"
                    placeholder={"Typer Your Observation"}
                />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>

        </form>
    );
};

export default ContactForm;