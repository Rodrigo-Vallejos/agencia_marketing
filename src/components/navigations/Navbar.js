import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import loading_dots from 'assets/img/loading-dots.gif'
import logo_boomslag from 'assets/img/boomslag-black.png'

function Navbar(){
    return(
        <nav className="w-full py-4 top-0 fixed">
            <div className="bg-white px-4 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <div className="ml-4 mt-2">
                        <img 
                            src={logo_boomslag}
                            width={140}
                            height={120}
                        className=""/>
                    </div>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <Link to='/cases' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500  mx-4">Cases</Link>
                        <Link to='/services' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500  mx-4">Services</Link>
                        <Link to='/about' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500  mx-4">About Us</Link>
                        <Link to='/blog' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500  mx-4">Blog</Link>
                        <Link to='/carrer' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500  mx-4">Carrer</Link>
                        <Link to='/contact' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500  mx-4">Contact</Link>
                        <button
                            type="button"
                            className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-orange-button px-6 py-2.5 text-large font-bold text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                        >
                            Hire Us
                            <img src={loading_dots} className="ml-3 w-7 h-2" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
};

const mapStateToProps = state =>({

});

export default connect(mapStateToProps, {

}) (Navbar);