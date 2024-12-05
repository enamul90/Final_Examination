import FormStore from "../../Store/FormStore.js";
import {useEffect} from "react";



const DasFormData = () => {

    const {FormReq, FormData } =  FormStore()

    useEffect(() => {
        (
            async () => {
                await FormReq()
            }
        )()
    }, [])


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
                    {FormData.map((item, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            {/*<td>{item.name}</td>*/}
                            {/*<td>{item. email}</td>*/}
                            {/*<td>{item.comment}</td>*/}
                            <td>Delete</td>
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
};

export default DasFormData;