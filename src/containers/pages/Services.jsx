import Navbar from "components/navigations/Navbar";
import Footer from "components/navigations/Footer";
import Layout from "hoc/layouts/Layout";

function Services(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                Services
            </div>
            <Footer/>
        </Layout>
    )
}
export default Services; 