

const BlogHeader = () => {
    return (
        <div className="blog-component mt-4 pt-5 container">
            <div className="blog-tittle d-flex justify-content-between align-items-center">
                <h2>Popular topics </h2>
                <p>See all</p>
            </div>

            <ul className="d-flex align-items-center m-0 p-0 mt-2">
                <li className="me-md-3 me-2 me-lg-4">All</li>
                <li className="me-md-3 me-2 me-lg-4">Adventure</li>
                <li className="me-md-3 me-2 me-lg-4">Travel</li>
                <li className="me-md-3 me-2 me-lg-4">Fashion</li>
                <li className="me-md-3 me-2 me-lg-4">Technology</li>
            </ul>

        </div>
    );
};

export default BlogHeader;