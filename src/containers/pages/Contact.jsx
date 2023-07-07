import Navbar from "components/navigations/Navbar";
import Footer from "components/navigations/Footer";
import Layout from "hoc/layouts/Layout";

function Contact(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                Contact
            </div>
            <Footer/>
        </Layout>
    )
}
export default Contact; 