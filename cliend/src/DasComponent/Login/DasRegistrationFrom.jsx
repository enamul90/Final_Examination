import "../../assets/css/dash.css"

const DasLoginFrom = () => {
    return (
        <div className="dasLogin ms-auto">

            <form className="dasLogin-form w-100 card p-4 mt-5">
                <h3 className="mb-4">Registration Form</h3>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Profile Image</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="d-flex gap-4 ">
                    <div className="mb-3">
                        <label className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    );
};

export default DasLoginFrom;