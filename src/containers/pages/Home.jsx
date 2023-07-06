import Navbar from "components/navigations/Navbar";
import Footer from "components/navigations/Footer";
import Layout from "hoc/layouts/Layout";

function Home(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                HOME
            </div>
            <Footer/>
        </Layout>
    )
}
export default Home; 