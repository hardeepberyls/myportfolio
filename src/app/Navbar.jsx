import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../index.css';

const Navbar=()=>{
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 nav_section">
                    <nav className='py-0 navbar navbar-expand-lg navbar-light'>
                    <div className="container-fluid">
                        <NavLink className="navbar-brand logo " to="#">Portfolio</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className='mx-auto mb-2 navbar-nav mb-lg-0 navs'>
                            <li className='nav-item'><NavLink className='nav-link' to='/'>Home</NavLink></li>
                            <li className='nav-item'><NavLink  className='nav-link' to='/about'>Skills</NavLink></li>
                            {/* <li className='nav-item'><NavLink  className='nav-link' to="#">Web React</NavLink></li>
                            <li className='nav-item'><NavLink  className='nav-link' to="#">Graphics</NavLink></li>
                            <li className='nav-item'><NavLink  className='nav-link' to="#">Portfolio</NavLink></li>
                            <li className='nav-item'><NavLink  className='nav-link' to="#">Contact</NavLink></li> */}
                        </ul>
                        </div>
                    </div>
                    </nav>
                </div>
            </div>
        </div>
        </>
    )
}
export default Navbar;