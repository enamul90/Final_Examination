

const DasService = () => {

    const data = [
        { id: 1,
            img: 'https://plus.unsplash.com/premium_photo-1661382344894-69fbc6262577?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            tittle: "It is a long established fact that a reader will be distracted byIt is a long established fact that a reader will be distracted byIt is a long established fact that a reader will be distracted by",
            dis: "uiux",
            sub_dis: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        { id: 1,
            img: 'https://plus.unsplash.com/premium_photo-1661382344894-69fbc6262577?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            tittle: "Md Hossen",
            dis: "uiux",
            sub_dis: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        { id: 1,
            img: 'https://plus.unsplash.com/premium_photo-1661382344894-69fbc6262577?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            tittle: "Md Hossen",
            dis: "uiux",
            sub_dis: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        { id: 1,
            img: 'https://plus.unsplash.com/premium_photo-1661382344894-69fbc6262577?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            tittle: "Md Hossen",
            dis: "uiux",
            sub_dis: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },

    ];

    return (
        <>

            <div className="ps-2">
                <div className="table-hero">
                    <h6>Service List</h6>
                    <button>Create Service</button>
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
                    {data.map((item, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>
                                <div>
                                    <p className="m-0 p-0 py-1"> <b>Tittle</b>  : {item.tittle}</p>
                                    <p className="m-0 p-0 py-1"> <b>Short Description</b>  : {item.sub_dis}</p>
                                    <p className="m-0 p-0 py-1"> <b>Description</b> : {item.dis}</p>
                                </div>
                            </td>

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

export default DasService;