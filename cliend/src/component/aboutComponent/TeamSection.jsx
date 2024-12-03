
let profileprofile = "https://media.istockphoto.com/id/1413763041/photo/smiling-businesswoman-looking-up-while-working.jpg?s=1024x1024&w=is&k=20&c=LYpKS3bniGv69liBgX8BLq2_giuXH3vv6abiV3xZuLI="

const TeamSection = () => {
    return (
        <div className="team mt-5 pt-3 mb-3 container">

            <h2 className="text-center"> Our Tram</h2>

                <div className="row">
                    {
                        [1,2,3,].map((item, index) => {
                            return (

                                    <div  key={index} className="col-12 col-md-4 mb-2 mt-4">
                                        <div className="card ">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src={profileprofile}
                                                         className="img-fluid rounded-start h-100"
                                                         alt="img"/>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">Card title</h5>
                                                        <p className="card-text">This is a wider card with supporting
                                                            text below as a
                                                            natural lead-in to additional content. This content is a
                                                            little bit
                                                            longer.</p>
                                                        <p className="card-text"><small className="text-body-secondary">Last
                                                            updated 3
                                                            mins ago</small></p>
                                                    </div>
                                                </div>
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

export default TeamSection;