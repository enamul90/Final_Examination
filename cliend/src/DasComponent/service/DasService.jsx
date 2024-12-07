import ServiceStore from "../../Store/Service.js";
import {useEffect} from "react";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const DasService = () => {
    const navigate = useNavigate();

    const {AllServiceList, AllServiceListReq, ServiceListDeleteReq ,SetServiceFormData , ServiceFormData} = ServiceStore()

    useEffect(() => {
        (
           async ()=>{
                await AllServiceListReq()
            }
        )()
    }, []);

    const DeleteServiceHandel = async (id) => {
        let res = await ServiceListDeleteReq(id)
        if(res){
            await AllServiceListReq()
            toast.success("service deleted successfully.")
        }
        else{
            toast.error("service not found")
        }
    }

    const EditHandel = async (id , Id) => {
        SetServiceFormData("tittle", AllServiceList[id].tittle)
        SetServiceFormData( "sub_dis",AllServiceList[id].sub_dis)
        SetServiceFormData( "img", AllServiceList[id].img)
        SetServiceFormData( "dis", AllServiceList[id].dis)
        SetServiceFormData( "id",Id)

        navigate('/addService')
    }


    if(AllServiceList ===null){
        return(
            <h1 className="p-5 bg-light text-center">Loading......</h1>
        )
    }

    if(AllServiceList.length < 1){
        return(
            <div>
                <h1 className="p-5 b>g-light text-center">Service List Empty</h1>
                <div className="table-hero">
                    <h6>Service List</h6>
                    <button onClick={() => {
                        navigate("/addService")
                    }}>Create Service
                    </button>
                </div>
            </div>
        )
    } else {
        return (
            <>

                <div className="ps-2">
                    <div className="table-hero">
                        <h6>Service List</h6>
                        <button onClick={()=>{navigate("/addService")}}>Create Service</button>
                    </div>


                    <table className="styled-table ">
                        <thead>
                        <tr className="head">
                            <th>SL</th>
                            <th>Content</th>
                            <th>Image</th>
                            <th>Settings</th>
                        </tr>
                        </thead>
                        <tbody>
                        {AllServiceList.map((item, i) => {
                            let id = item._id;
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>
                                        <div>
                                            <p className="m-0 p-0 py-1"><b>Tittle</b> : {item.tittle}</p>
                                            <p className="m-0 p-0 py-1"><b>Short Description</b> : {item.sub_dis}</p>
                                            <p className="m-0 p-0 py-1"><b>Description</b> : {item.dis}</p>
                                        </div>
                                    </td>

                                    <td>
                                        <img className="table-image" alt="be" src={item.img}/>
                                    </td>
                                    <td>
                                        <button onClick={() => {
                                            EditHandel(i, id)
                                        }} className="m-2">Edit
                                        </button>
                                        <button onClick={() => {
                                            DeleteServiceHandel(item._id)
                                        }}>Delete
                                        </button>
                                    </td>
                                </tr>
                            )


                        })}
                        </tbody>
                    </table>


                    <div className="container mt-3">
                        <div className="row w-100">
                            <div className="m-0 col-">

                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }

};

export default DasService;