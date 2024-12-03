let logo = "https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?t=st=1733159334~exp=1733162934~hmac=62aa0c855acf3b217caa36c3e656028c0f8a00081de8977871eec9c5c93708ba&w=1060"

const BlogCart = () => {
    return (
        <div className="mt-4 container blog-cart">
            <div className="row g-4">

                {
                    [0,0,0,0,0,0].map((item, index) => {
                        return (
                            <div key={index} className="col-12 col-md-6 col-lg-3 ">

                                <div className="card ">
                                    <img src={logo} alt="img" className="card-img-top"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text ">
                                            Some quick example text to build on the card title and
                                            make
                                            up the
                                            bulk of the card's content.</p>
                                        <a className="btn btn-primary w-100">Go somewhere</a>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }

            </div>

        </div>
    );
};

export default BlogCart;