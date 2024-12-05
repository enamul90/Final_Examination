

const DasFormData = () => {
    const data = [
        { id: 1,
            name: "Md Hossen",
            email: "uiux",
            comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        { id: 1,
            name: "Md Hossen",
            email: "uiux",
            comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        { id: 1,
            name: "Md Hossen",
            email: "uiux",
            comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        { id: 1,
            name: "Md Hossen",
            email: "uiux",
            comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
    ];

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
                    {data.map((item, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <td>{item. email}</td>
                            <td>{item.comment}</td>
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