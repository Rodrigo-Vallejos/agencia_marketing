import Navbar from "components/navigations/Navbar";
import Footer from "components/navigations/Footer";
import Layout from "hoc/layouts/Layout";

function Cases(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                Cases
            </div>
            <Footer/>
        </Layout>
    )
}
export default Cases; 