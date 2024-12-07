import DasLayout from "../../DasLayout/DasLayout.jsx";
import BlogStore from "../../Store/BlogStore.js";
import {useParams} from "react-router-dom";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const AddBlogDetail = () => {
    let {id} = useParams();
    const navigate = useNavigate();

    const {BlogDetailCreateFormData, SetBlogDetailCreateFormData,  BlogDetailCreateReq} = BlogStore()
    let {BlogID} = BlogDetailCreateFormData

    const FormSubmitHandel = async (e)=>{
        e.preventDefault();

        if(BlogID ===null){
            let res = await BlogDetailCreateReq(id,BlogDetailCreateFormData )
            if(res){
                toast.success("Blog Detail Created Successfully")
                navigate("/dashboard")
            }
            else {
                toast.error("Blog Detail Create Failed")
            }
        }

        else {
            let res = await BlogDetailCreateReq(id,BlogDetailCreateFormData )
            if(res){
                toast.success("Blog Detail Update Successfully")
                navigate("/dashboard")
            }
            else {
                toast.error("Blog Detail Update Failed")
            }

        }

    }

    return (
        <DasLayout>
            <div className="dasLogin ms-auto">

                <form
                    onSubmit={FormSubmitHandel}
                    className="dasLogin-form w-100 card p-4  pb-3 mt-5">
                    <h3 className="mb-4">Blog Detail</h3>

                    <div className="mb-3">
                        <label className="form-label">Blog Detail Fist </label>
                        <textarea
                            onChange={(e) => {
                                SetBlogDetailCreateFormData("blog_des1", e.target.value)
                            }}
                            value={BlogDetailCreateFormData.blog_des1}
                            className="form-control"
                            rows={5}

                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Blog Detail 2nd</label>
                        <textarea
                            onChange={(e) => {
                                SetBlogDetailCreateFormData("blog_des2", e.target.value)
                            }}
                            value={BlogDetailCreateFormData.blog_des2}
                            className="form-control"
                            rows="5"

                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </DasLayout>
    );
};

export default AddBlogDetail;