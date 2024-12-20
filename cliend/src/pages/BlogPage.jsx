import Layout from "../layout/Layout.jsx";
import BlogHeader from "../component/Blog/BlogHeader.jsx";
import BlogCart from "../component/Blog/BlogCart.jsx";


const BlogPage = () => {
    return (
        <Layout>
            <BlogHeader />
            <BlogCart />
            <div className="py-4"></div>
        </Layout>
    );
};

export default BlogPage;