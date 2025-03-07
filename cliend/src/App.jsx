import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import LoginPage from "./DasPage/LoginPage.jsx";
import RegistrationPage from "./DasPage/RegistrationPage.jsx";
import Dashboard from "./DasPage/Dashboard.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
import AddService from "./DasComponent/service/AddService.jsx";
import AddTeam from "./DasComponent/Team/AddTeam.jsx";
import AddBlog from "./DasComponent/blog/AddBlog.jsx";
import AddBlogDetail from "./DasComponent/blog/AddBlogDetail.jsx";

function App() {


  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/blog" element={<BlogPage />}/>
                <Route path="/about" element={<AboutPage />}/>
                <Route path="/contact" element={<ContactPage />}/>
                <Route path="/service" element={<ServicePage />}/>
                <Route path="/blogDetail/:id" element={<BlogDetail />}/>


                <Route path="/login" element={<LoginPage />}/>
                <Route path="/registration" element={<RegistrationPage />}/>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/addService" element={<AddService />}/>
                <Route path="/addTeam" element={<AddTeam />}/>
                <Route path="/addBlog" element={<AddBlog />}/>
                <Route path="/addBlogDetail/:id" element={<AddBlogDetail />}/>

            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
