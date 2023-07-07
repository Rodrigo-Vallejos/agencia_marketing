import Navbar from "components/navigations/Navbar";
import Footer from "components/navigations/Footer";
import Layout from "hoc/layouts/Layout";

function Blog(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                Blog
            </div>
            <Footer/>
        </Layout>
    )
}
export default Blog; 