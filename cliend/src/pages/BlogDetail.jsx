import Layout from "../layout/Layout.jsx";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import PublicStore from "../Storer/PublicStore.js";
import "../assets/css/blogDetail.css"


const BlogDetail = () => {

    const {BlogDetails, BlogDetailsReq} = PublicStore()

    const {id} = useParams();
    useEffect(()=>{
        (
            async ()=>{
                await BlogDetailsReq(id)
            }
        )()
    },[])




    if(BlogDetails === null){
        return (
            <div className="container py-5 mt-4 w-100 bg-light">
                <h1 className="text-center w-25 ">Loading.....</h1>
            </div>
        )
    }

    else if(BlogDetails.length < 1){
        return (
            <div className="container py-5 mt-4 w-100 bg-light">
                <h1 className="text-center w-25 ">Product Detail Error</h1>
            </div>
        )
    }



    else {
        return (
            <Layout>
                <div className="container w-100">
                    <div className="row w-100">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <div className="blogDetailImgBox">
                                <img className="blogDetailImg" src={BlogDetails['blogList']['img']} alt="lig"/>
                            </div>
                            <h4 className="mb-4">{BlogDetails['blogList']['title']}</h4>
                            <h6 className="mb-4">{BlogDetails['blogList']['sub_dis']}</h6>
                            {
                                BlogDetails['blogDetail'] === undefined ? <p className='p-4 bg-light mt-4'>Blog Detail not Found </p> :
                                    <div>
                                        <p>{BlogDetails['blogDetail'] ['blog_des1']}</p>
                                        <p>{BlogDetails['blogDetail'] ['blog_des2']}</p>
                                    </div>
                            }

                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                </div>

            </Layout>
        );
    }
};

export default BlogDetail;