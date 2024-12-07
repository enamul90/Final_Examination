
import "../../assets/css/List.css"
import BlogStore from "../../Store/BlogStore.js";
import {useEffect} from "react";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const DasBlogComponent = () => {
    const navigate = useNavigate();
    const {AllBlogList, AllBlogListReq, BlogDeleteReq, SetBlogCreateFormData ,BlogCreateFormData} =  BlogStore()

    useEffect(() => {
        (
            async ()=>{
                await AllBlogListReq()
            }
        )()
    }, []);

    const DeleteHandel = async (id) => {
         let res =  await BlogDeleteReq(id)
        if(res){
            await AllBlogListReq()
            toast.success('Blog deleted successfully !')
        }
        else{
            toast.error('Blog deleted failed!')
        }

    }

    const EditHandel =  (i, id) => {
        SetBlogCreateFormData( "remark", AllBlogList[i]['remark'])
        SetBlogCreateFormData( "img", AllBlogList[i]['img'])
        SetBlogCreateFormData( "sub_dis", AllBlogList[i]['sub_dis'])
        SetBlogCreateFormData( "title", AllBlogList[i]['title'])
        SetBlogCreateFormData( "id",id)
        navigate("/addBlog")
    }

    if(AllBlogList === null){
        return (
            <h1 className="p-5 bg-light">Loading.........</h1>
        )
    }

    else if(AllBlogList.length < 1){
        return (
            <div>
                <h1 className="p-5 bg-light">Blog List Empty</h1>
                <div className="table-hero">
                    <h6>All Blog List</h6>s
                    <button onClick={() => navigate('/addBlog')}>Create Blog</button>
                </div>
            </div>

        )
    } else {
        return (
            <div className="ps-2">
                <div className="table-hero">
                <h6>All Blog List</h6>
                    <button onClick={()=>navigate('/addBlog')}>Create Blog</button>
                </div>


                <table className="styled-table ">
                    <thead>
                    <tr className="head">
                        <th>SL</th>
                        <th>Image</th>
                        <th>Tittle</th>
                        <th>Short Description</th>
                        <th>Settings</th>
                    </tr>
                    </thead>
                    <tbody>
                    {AllBlogList.map((item,i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>
                                    <img className="table-image" alt="be" src={item.img}/>
                                </td>
                                <td>{item.title}</td>
                                <td>{item.sub_dis}</td>
                                <td>
                                    <button
                                        className="m-2"
                                        onClick={() => {
                                        EditHandel(i, item._id)
                                    }}>Edit
                                    </button>
                                    <button onClick={() => {
                                        DeleteHandel(item._id)
                                    }} >Delete
                                    </button>
                                </td>
                            </tr>
                        )
                        }
                    )}
                    </tbody>
                </table>


                <div className="container mt-3">
                    <div className="row w-100">
                        <div className="m-0 col-">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default DasBlogComponent;