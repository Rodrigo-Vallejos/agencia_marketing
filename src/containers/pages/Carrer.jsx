import Navbar from "components/navigations/Navbar";
import Footer from "components/navigations/Footer";
import Layout from "hoc/layouts/Layout";

function Carrer(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                Carrer
            </div>
            <Footer/>
        </Layout>
    )
}
export default Carrer; 