
import "../../assets/css/List.css"
import TeamStore from "../../Store/TeamStore.js";
import {useEffect} from "react";
import toast from "react-hot-toast";
import { useNavigate} from "react-router-dom";
const DasTeam = () => {

    const navigate = useNavigate();

    const {AllTeamList,AllTeamListReq , TeamListDeleteReq , SetTeamFormData , TeamFormData} =TeamStore()

    useEffect(()=>{

        (
            async ()=>{
                await AllTeamListReq()
            }
        )()
    }, [])

    const DeleteTeamHandel = async (id)=>{
        const res = await TeamListDeleteReq(id)
        if(res){
            await AllTeamListReq()
            toast.success('deleted successfully !')
        }
        else{
            toast.error('deleted Fail !')
        }
    }

    const updateTeamHandel = async (i ,id)=>{
        SetTeamFormData("id", id)
        SetTeamFormData("name", AllTeamList[i].name)
        SetTeamFormData("department", AllTeamList[i].department)
        SetTeamFormData("img", AllTeamList[i].img)
        SetTeamFormData("comment", AllTeamList[i].comment)

        navigate('/addTeam')
    }

    if(AllTeamList ===null){
        return(
            <h1 className="p-5 bg-light text-center">Loading.......</h1>
        )
    }

    else  if(AllTeamList.length < 1){
        return(
            <div>
                <h1 className="p-5 bg-light text-center">Team List Empty</h1>
                <div className="table-hero">
                    <h6>Team List</h6>
                    <button onClick={()=>{navigate("/addTeam")}}>Create Time</button>
                </div>
            </div>

        )
    } else {
        return (
            <>

                <div className="ps-2">

                    <div className="table-hero">
                        <h6>Team List</h6>
                        <button onClick={() => {
                            navigate("/addTeam")
                        }}>Create Time
                        </button>
                    </div>

                    <table className="styled-table ">
                        <thead>
                        <tr className="head">
                            <th>SL</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Comment</th>
                            <th>Image</th>
                            <th>Settings</th>
                        </tr>
                        </thead>
                        <tbody>
                        {AllTeamList.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.department}</td>
                                    <td>{item.comment}</td>
                                    <td>
                                        <img className="table-image" alt="be" src={item.img}/>
                                    </td>
                                    <td>
                                        <button onClick={()=>{updateTeamHandel(i, item._id)}} className="my-2 w-100">Edit</button>
                                        <button className="w-100" onClick={() => {
                                            DeleteTeamHandel(item._id)
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

export default DasTeam;