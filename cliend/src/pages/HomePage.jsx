import Layout from "../layout/Layout.jsx";
import HeroComponent from "../component/homeComponent/HeroComponent.jsx";
import BlogCart from "../component/Blog/BlogCart.jsx";
import HomeFeature from "../component/homeComponent/HomeFeature.jsx";
import BlogHeaderHome from "../component/homeComponent/BlogHeaderHome.jsx";
import {useEffect} from "react";
import PublicStore from "../Storer/PublicStore.js";

const HomePage = () => {

    const {HomeBlogListReq} =PublicStore()

    useEffect(() => {
        (
            async () => {
                await HomeBlogListReq();
            }
        )()
    },[])

    return (
        <Layout>
            <HeroComponent />
            <BlogHeaderHome />
            <BlogCart />
            <HomeFeature />
        </Layout>
    );
};

export default HomePage;