import Navbar from "components/navigations/Navbar";
import Footer from "components/navigations/Footer";
import Layout from "hoc/layouts/Layout";
import Header from "components/Home/Header";

function Home(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                <Header/>
            </div>
            <Footer/>
        </Layout>
    )
}
export default Home; 