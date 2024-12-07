import PublicStore from "../../Store/PublicStore.js";
import {useNavigate} from "react-router-dom";

const BlogCart = () => {
    const navigate = useNavigate();

    let {BlogList}= PublicStore()

    let url = window.location.pathname;



    if(BlogList == null){
        return (
            <div className="container py-5 mt-4 w-100 bg-light" >
                <h1 className="text-center w-25 ">Loading.....</h1>
            </div>
        )
    }

    else if(BlogList.length < 1){
        return (
            <div className="container py-5 w-100 mt-4 bg-light" >
                <h1 className="text-center w-100">Blog List Empty</h1>
            </div>
        )
    }
    else {
        return (
            <div className="mt-4 container blog-cart">
                <div className="row w-100 g-4">

                    {
                        url === "/" ? BlogList.slice(0, 6).map((item, index) => {
                            return (
                                <div key={index} className="col-12 col-md-6 col-lg-3 ">
                                    <div className="card ">
                                        <img src={item.img} alt="img" className="card-img-top"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text ">{item.sub_dis}</p>
                                            <a
                                                onClick={()=>navigate(`/blogDetail/${item._id}`)}
                                                className="btn btn-primary
                                                w-100"
                                            >
                                                See More
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            )
                        }): BlogList.map((item, index) => {
                            return (
                                <div key={index} className="col-12 col-md-6 col-lg-3 ">
                                    <div className="card ">
                                        <img src={item.img} alt="img" className="card-img-top"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text ">{item.sub_dis}</p>
                                            <a
                                                onClick={()=>navigate(`/blogDetail/${item._id}`)}
                                                className="btn btn-primary
                                                w-100"
                                            >
                                                See More
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            )
                        })

                    }

                </div>

            </div>
        );
    }
};

export default BlogCart;