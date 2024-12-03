
let img = "https://media.istockphoto.com/id/1911521660/photo/call-center-workers.jpg?s=2048x2048&w=is&k=20&c=aqismQ-upRCbz4epN01cqqjFptQCnt0Xv5BhmnZlR4g="

const ServiceComponent = () => {
    return (
        <div className="service container py-4">

            <div className=" mb-1">
                {
                    [1,2,3,4,5].map(i => {
                        return (
                            <div key={i} className="row g-0 py-2">
                                <div className="col-md-4 ">
                                    <img src={img} className="img-fluid rounded-start" alt="img"/>
                                </div>
                                <div className="col-md-8 d-flex align-items-center">
                                    <div className="card-body ps-md-4 ps-0 pt-3 pt-md-0">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text mb-1">This is a wider card with supporting text below as a
                                            natural
                                            lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text mt-0"><small className="text-body-secondary">Last updated 3
                                            mins
                                            ago</small></p>
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

export default ServiceComponent;