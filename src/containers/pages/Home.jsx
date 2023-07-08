import Navbar from "components/navigations/Navbar";
import Footer from "components/navigations/Footer";
import Layout from "hoc/layouts/Layout";
import Header from "components/Home/Header";
import Incentives from "components/Home/Incentives";
import UseCases from "components/Home/UseCases";
import Features from "components/Home/Features";
import CTA from "components/Home/CTA";
import LogoCloud from "components/Home/LogoCloud";
import BlogList from "components/Home/BlogList";

function Home(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                <Header/>
                <Incentives/>
                <UseCases/>
                <Features/>
                <CTA/>
                <LogoCloud/>
                <BlogList/>
            </div>
            <Footer/>
        </Layout>
    )
}
export default Home; 