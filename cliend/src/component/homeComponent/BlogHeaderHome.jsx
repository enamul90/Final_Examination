
import {Link} from "react-router-dom";


const BlogHeader = () => {
    return (
        <div className="blog-component mt-4 pt-5 container">
            <div className="d-flex justify-content-between align-items-center w-100">
                <h2>Popular Blog </h2>
                <Link to={"/blog"}>See all</Link>
            </div>

        </div>
    );
};

export default BlogHeader;