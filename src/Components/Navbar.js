import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import Modal from '../Modal';
import Cart from '../Screens/Cart';
import './Navbar.css';
import { Badge } from 'react-bootstrap';
import { useCart } from './ContextReducer';

function Navbar() {
    const navigate = useNavigate();
    const [cartView , setCartView] = useState(false);
    let data = useCart();
    const  handleLogout = () =>{
        // local Storage se nav item hata kr logout kr dete hai
        localStorage.removeItem("authToken");
        navigate("/login");

    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg  navbar navbar-dark bg-dark navbar-light bg-light">
                <div className="container-fluid">


                    <Link className="navbar-brand " to="/">Instant Hunt</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/aboutus">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contactus">Contact Us</Link>
                            </li>


                        </ul>


                       
                       {/* // Agar Login ni hai to signup or login oprion dikhega warna  log out dikhao */}
                        {(!localStorage.getItem("authToken")) ?
                            <div>
                                <Link className="btn bg bg-white mx-1" to="/login">Login</Link>
                                <Link className="btn bg bg-white mx-1" to="/signup">SignUp</Link>
                            </div>


                            :
                            <div>
                                <div>
                                    <Link className="btn bg bg-white text-success mx-1" to="/myorder">My Orders</Link>
                                    <div className="btn bg bg-white text-success mx-1">
                                    <Link className="btn bg bg-white text-success mx-1" to="/"  onClick={()=>{setCartView(true)}}>My Cart  {" "}</Link> 
                                    <Badge pill bg ="danger"> 

                                    {data !== undefined && data.length >0 ? data.length : 0}

                                    </Badge>
                                    </div>
                                    {cartView ? <Modal onClose = {()=>setCartView(false)}><Cart/></Modal> : null}
                                    <Link className="btn bg bg-white  text-danger mx-1" to="/login" onClick={handleLogout}>Logout</Link>
                                    
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </nav >



        </div >
    )
}

export default Navbar;
