import Navbar from "components/navigations/Navbar";
import Footer from "components/navigations/Footer";
import Layout from "hoc/layouts/Layout";

function About(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                About
            </div>
            <Footer/>
        </Layout>
    )
}
export default About; 