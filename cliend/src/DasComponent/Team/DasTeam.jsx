
import "../../assets/css/List.css"

const DasTeam = () => {

    const data = [
        { id: 1,
            img: 'https://plus.unsplash.com/premium_photo-1661382344894-69fbc6262577?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: "Md Hossen",
            department: "uiux",
            comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        { id: 1,
            img: 'https://plus.unsplash.com/premium_photo-1661382344894-69fbc6262577?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: "Md Hossen",
            department: "uiux",
            comment: 'It is a long established fact that a  the readable content of a page when looking at its layout.'
        },        { id: 1,
            img: 'https://plus.unsplash.com/premium_photo-1661382344894-69fbc6262577?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: "Md Hossen",
            department: "uiux",
            comment: 'It is a long established fact that a readable content of a page when looking at its layout.'
        },
    ];

    return (
        <>

            <div className="ps-2">
                <div className="table-hero">
                    <h6>Team List</h6>

                    <button>Create Time</button>
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
                    {data.map((item, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.department}</td>
                            <td>{item.comment}</td>
                            <td>
                                <img className="table-image" alt="be" src={item.img}/>
                            </td>
                            <td>Edit Delete</td>
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

export default DasTeam;