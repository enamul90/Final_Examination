import Layout from "../layout/Layout.jsx";
import HeroComponent from "../component/homeComponent/HeroComponent.jsx";
import BlogHeader from "../component/Blog/BlogHeader.jsx";
import BlogCart from "../component/Blog/BlogCart.jsx";
import HomeFeature from "../component/homeComponent/HomeFeature.jsx";


const HomePage = () => {
    return (
        <Layout>
            <HeroComponent />
            <BlogHeader />
            <BlogCart />
            <HomeFeature />
        </Layout>
    );
};

export default HomePage;