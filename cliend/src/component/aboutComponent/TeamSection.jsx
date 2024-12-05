import PublicStore from "../../Store/PublicStore.js";
import {useEffect} from "react";


const TeamSection = () => {

    const {TeamList, TeamListReq} = PublicStore()

    useEffect(()=>{
        (
            async () => {
                await TeamListReq()
            }
        )()
    },[])


    if(TeamList ===null){
        return (
            <div className="container py-5 mt-4 w-100 bg-light">
                <h1 className="text-center w-25 ">Loading.....</h1>
            </div>
        )
    }

    else if(TeamList.length <1){
        return (
            <div className="container py-5 mt-4 w-100 bg-light">
                <h1 className="text-center w-25 ">Team Lest Empty</h1>
            </div>
        )
    }

    else{
        return (
            <div className="team mt-5 pt-3 mb-3 flex-column container">

                <h2 className="text-center"> Our Team</h2>

                <div className="row">
                    {
                        TeamList.map((item, index) => {
                            return (

                                <div  key={index} className="col-12 col-md-4 mb-2 mt-4">
                                    <div className="card ">
                                        <div className="row g-0">
                                            <div className="col-md-5">
                                                <img src={item.img}
                                                     className="img-fluid rounded-start h-100"
                                                     alt="img"/>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.name}</h5>
                                                    <p className="card-text">
                                                        <small
                                                            className="text-body-secondary "
                                                        >
                                                            {item.department}
                                                        </small>
                                                    </p>
                                                    <p className="card-text">{item.comment}</p>
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
    }


};

export default TeamSection;