import PublicStore from "../../Storer/PublicStore.js";
import {useRef} from "react";


const BlogHeader = () => {



    const {RemarkBlogListReq} = PublicStore()

    let InternalRef = useRef()
    let InternationalRef = useRef()
    let ReligionRef = useRef()

    const InternalRefHandel = async ()=>{
        InternalRef.className= "text-primary me-md-3 me-2 me-lg-4";
        ReligionRef.className= "me-md-3 me-2 me-lg-4"
        InternationalRef.className= "me-md-3 me-2 me-lg-4"
        await RemarkBlogListReq("internal");

    }
    const InternationalRefHandel = async ()=>{
        InternalRef.className= "me-md-3 me-2 me-lg-4";
        InternationalRef.className= "text-primary me-md-3 me-2 me-lg-4"
        ReligionRef.className= "me-md-3 me-2 me-lg-4"
        await RemarkBlogListReq("international")
    }
    const ReligionRefHandel = async ()=>{
        InternalRef.className= "me-md-3 me-2 me-lg-4";
        InternationalRef.className= "me-md-3 me-2 me-lg-4"
        ReligionRef.className= "text-primary me-md-3 me-2 me-lg-4"
        await RemarkBlogListReq("religion")
    }


    return (
        <div className=" mt-4 pt-5 container">
            <div className="d-lg-flex justify-content-between align-items-center w-100  ">
                <h2>All Blog </h2>

                <ul className="d-flex align-items-center m-0 p-0 mt-2">
                    <li
                        ref={(a)=>InternalRef=a}
                        onClick={InternalRefHandel}
                        className="me-md-3 me-2 me-lg-4"
                    >
                        Internal
                    </li>
                    <li
                        ref={(a)=>InternationalRef=a}
                        onClick={InternationalRefHandel}
                        className="me-md-3 me-2 me-lg-4"
                    >
                        International
                    </li>
                    <li
                        ref={(a)=>ReligionRef=a}
                        onClick={ReligionRefHandel}
                        className="me-md-3 me-2 me-lg-4"
                    >
                        Religion
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default BlogHeader;