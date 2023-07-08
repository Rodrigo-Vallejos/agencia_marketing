import Navbar from "components/navigations/Navbar";
import Footer from "components/navigations/Footer";
import Layout from "hoc/layouts/Layout";
import Header from "components/Cases/Header";
import CasesList from "components/Cases/CasesList";

function Cases() {
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                <Header/>
                <CasesList/>
            </div>
            <Footer/>
        </Layout>
    )
}
export default Cases;