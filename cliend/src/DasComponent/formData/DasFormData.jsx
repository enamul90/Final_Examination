import FormStore from "../../Store/FormStore.js";
import {useEffect} from "react";
import toast from "react-hot-toast";



const DasFormData = () => {

    const {DasFormReq, DasFormData, DasFormDelete } =  FormStore()

    useEffect(() => {
        (
            async () => {
                await DasFormReq()
            }
        )()
    }, [])

    const DeleteFormHandel = async (e) => {
        let res = await DasFormDelete(e)
        await DasFormReq()
        if(res){
            toast.success('Form has been deleted successfully.!')
        }
        else{
            toast.error('Form has not been deleted successfully.!')
        }
    }

    if(DasFormData ===null){
        return (
            <h1 className="p-5 bg-light text-center w-100">Loading ......</h1>
        )
    }

    else if (DasFormData.length < 1) {
        return (
            <h1 className="p-5 bg-light text-center w-100">List Empty</h1>
        )
    }

    else {
        return (
            <>
                <div className="ps-2">
                    <div className="table-hero">
                        <h6>Form List</h6>
                    </div>

                    <table className="styled-table ">
                        <thead>
                        <tr className="head">
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Comment</th>
                            <th>Settings</th>
                        </tr>
                        </thead>
                        <tbody>

                        {DasFormData.map((item, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item.name}</td>
                                <td>{item. email}</td>
                                <td>{item.comment}</td>
                                <td onClick={()=>DeleteFormHandel(item._id)}>Delete</td>
                            </tr>
                        ))}
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

export default DasFormData;