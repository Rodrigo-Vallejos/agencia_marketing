import { connect } from "react-redux";
import { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import logo_boomslag from 'assets/img/boomslag-black.png'
import { PulseLoader } from "react-spinners";

function Navbar(){
    // Constante para react-spinner
    const [loading,setLoading]=useState(true);

    return(
        <nav className="w-full py-4 top-0 fixed">
            <div className="px-4 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <Link to='/' className="ml-4 mt-2">
                        <img 
                            src={logo_boomslag}
                            width={140}
                            height={120}
                        className=""/>
                    </Link>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <NavLink to='/Cases' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500  mx-4">Cases</NavLink>
                        <NavLink to='/Services' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500  mx-4">Services</NavLink>
                        <NavLink to='/About' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500  mx-4">About Us</NavLink>
                        <NavLink to='/Blog' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500  mx-4">Blog</NavLink>
                        <NavLink to='/Carrer' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500  mx-4">Carrer</NavLink>
                        <NavLink to='/Contact' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500  mx-4">Contact</NavLink>
                        <button
                            type="button"
                            className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-orange-button px-6 py-2.5 text-large font-bold text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                        >
                            Hire Us
                            <PulseLoader loading={loading} size={8} color="#ffffff" />
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