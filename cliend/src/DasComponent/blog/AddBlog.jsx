import DasLayout from "../../DasLayout/DasLayout.jsx";
import "../../assets/css/dash.css"
import BlogStore from "../../Store/BlogStore.js";
import toast from "react-hot-toast";
import  {useNavigate} from "react-router-dom";

const AddBlog = () => {
    const navigate = useNavigate();

    const {BlogCreateFormData, SetBlogCreateFormData, BlogCreateReq ,BlogUpdateReq} = BlogStore()

    const FormSubmitHandel = async (e)=>{
        e.preventDefault();

        let {id} = BlogCreateFormData;
        if (id ===null){
            let res = await BlogCreateReq(BlogCreateFormData)

            if(res.status === 200){
                toast.success("Blog Created Successfully")
                navigate(`/addBlogDetail/${res.data['data']}`)
            }
            else {
                toast.error("Something went wrong");
            }
        }
        else {
            let res =  await  BlogUpdateReq(id, BlogCreateFormData)
            if(res){
                toast.success("Blog Update Successfully");
                navigate("/addBlogDetail/"+id)
            }
            else {
                toast.error("Something went wrong");
            }
        }

    }

    return (
            < DasLayout>
                <div className="dasLogin ms-auto">

                    <form
                        onSubmit={FormSubmitHandel}
                        className="dasLogin-form w-100 card p-4  pb-3 mt-5">
                        <h3 className="mb-4">Blog Form</h3>

                        <div className="mb-3">
                            <label className="form-label">Add Tittle</label>
                            <input
                                onChange={(e) => {
                                    SetBlogCreateFormData("title", e.target.value)
                                }}
                                value={BlogCreateFormData.title}
                                className="form-control"

                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Service Image Url</label>
                            <input
                                onChange={(e) => {
                                    SetBlogCreateFormData("img", e.target.value)
                                }}
                                value={BlogCreateFormData.img}
                                className="form-control"

                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Sub Description</label>
                            <select
                                value={BlogCreateFormData.remark}
                                onChange={(e) => {
                                    SetBlogCreateFormData("remark", e.target.value)
                                }}
                                className="form-select" aria-label="Default select example">
                                <option selected> select menu</option>
                                <option value="home">Home</option>
                                <option value="international">International</option>
                                <option value="internal">Internal</option>
                                <option value="religion">Religion</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Sub Description</label>
                            <textarea
                                onChange={(e) => {
                                    SetBlogCreateFormData("sub_dis", e.target.value)
                                }}
                                value={BlogCreateFormData.sub_dis}
                                className="form-control"
                                rows="3"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </div>
            </DasLayout>
    );
};

export default AddBlog;