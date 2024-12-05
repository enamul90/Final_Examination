
import "../../assets/css/List.css"
const DasBlogComponent = () => {

        const data = [
            { id: 1,
                img: 'https://picsum.photos/id/237/200/300',
                tittle: "There are many variations",
                sub_dis: 'There are many variations of passages of Lorem Ipsum available'
            },
            { id: 1,
                img: 'https://picsum.photos/id/237/200/300',
                tittle: "There are many variations",
                sub_dis: 'There are many variations of passages of Lorem Ipsum available'
            },
            { id: 1,
                img: 'https://picsum.photos/id/237/200/300',
                tittle: "There are many variations",
                sub_dis: 'There are many variations of passages of Lorem Ipsum available'
            },
            { id: 1,
                img: 'https://picsum.photos/id/237/200/300',
                tittle: "There are many variations",
                sub_dis: 'There are many variations of passages of Lorem Ipsum available'
            },
            { id: 1,
                img: 'https://picsum.photos/id/237/200/300',
                tittle: "There are many variations",
                sub_dis: 'There are many variations of passages of Lorem Ipsum available'
            },
            { id: 1,
                img: 'https://picsum.photos/id/237/200/300',
                tittle: "There are many variations",
                sub_dis: 'There are many variations of passages of Lorem Ipsum available'
            },
            { id: 1,
                img: 'https://picsum.photos/id/237/200/300',
                tittle: "There are many variations",
                sub_dis: 'There are many variations of passages of Lorem Ipsum available'
            },
            { id: 1,
                img: 'https://picsum.photos/id/237/200/300',
                tittle: "There are many variations",
                sub_dis: 'There are many variations of passages of Lorem Ipsum available'
            },
        ];

    return (
        <div className="ps-2">
            <div className="table-hero">
                <h6>All Blog List</h6>

                <button>Create Blog</button>
            </div>


            <table className="styled-table ">
                <thead>
                <tr className="head">
                    <th>SL</th>
                    <th>Image</th>
                    <th>Tittle</th>
                    <th>Short Description</th>
                    <th>Settings</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item,i) => (
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>
                            <img className="table-image" alt="be" src={item.img}/>
                        </td>
                        <td>{item.tittle}</td>
                        <td>{item.sub_dis}</td>
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
    );
};

export default DasBlogComponent;