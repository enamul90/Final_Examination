import PublicStore from "../../Storer/PublicStore.js";
import {useEffect} from "react";

let img = "https://media.istockphoto.com/id/1911521660/photo/call-center-workers.jpg?s=2048x2048&w=is&k=20&c=aqismQ-upRCbz4epN01cqqjFptQCnt0Xv5BhmnZlR4g="

const ServiceComponent = () => {

    const {ServiceList, ServiceListReq}= PublicStore()

    useEffect(() => {
        (
          async  ()=>{
                await  ServiceListReq()
            }
        )()
    }, []);


    if(ServiceList == null){
        return (
            <div className="container py-5 mt-4 w-100 bg-light">
                <h1 className="text-center w-25 ">Loading.....</h1>
            </div>
        )
    }

    else if(ServiceList.length <1){
        return (
            <div className="container py-5 mt-4 w-100 bg-light">
                <h1 className="text-center w-25 ">Service Empty.</h1>
            </div>
        )
    }


    return (
        <div className="service container w-100 py-4">

            <div className=" mb-1 w-100">
                {
                    ServiceList.map((item, i) => {
                        return (
                            <div key={i} className="row g-0  card w-100 d-md-flex flex-md-row mt-4">
                                <div className="col-md-4 ">
                                    <img src={item.img} className="img-fluid rounded-start" alt="img"/>
                                </div>
                                <div className="col-md-8 p-3 p-md-0  d-flex align-items-center">
                                    <div className="card-body ps-md-4 ps-0 pt-3 pt-md-0">
                                        <h5 className="card-title">{item.tittle}</h5>
                                        <p className="card-text mb-1">{item.sub_dis}</p>
                                        <p className="card-text mt-0"><small className="text-body-secondary">{item.dis}</small></p>
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