import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo1 from "../img/log.webp";
import "./Commen.css"
// import { Button } from 'bootstrap/dist/js/bootstrap.bundle';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import form_image from "../img/commonbrochure.jpg"
import { Link } from 'react-router-dom';
import Management from '../Management Speack';

export const Hadder = () => {
    return (
        <>
            <Navbar expand="lg" className=" shadow-sm ">
                <Container className=' position-relative '>
                    <Navbar.Brand className=''>
                        <Link to={"/"}>
                            <img src={logo1} alt="" className='logo_image position-absolute top-0 shadow-sm  start-0' />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Example />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="ms-auto my-3">
                            <Nav.Link className='fs-5  px-4 ps-0 ps-xl-3'>
                                <Link to={"/"} className=' text-black text-decoration-none '>
                                    Home
                                </Link>
                            </Nav.Link>
                            <Nav.Link to={"/aboutus"} className='fs-5 text-black px-4 ps-0 ps-xl-3 click_and_show position-relative ' >
                                About us
                                <div className='samosa'></div>
                                <ul className='border_top-bottom position-absolute bg-white project px-0 py-3 mt-4'>
                                    <li className='py-1 px-4 changeonhover '>
                                        <Link to={"/aboutus"} className=' fw-normal  text-black text-decoration-none '>About us</Link>
                                    </li>
                                    <li className='py-1 px-4 changeonhover '>
                                        <Link to={"/our-journey"} className=' fw-normal  text-black text-decoration-none '>Our Journey</Link>
                                    </li>
                                    <li className='py-1 px-4 changeonhover '>
                                        <Link to={"/management"} className=' fw-normal  text-black text-decoration-none '>Management Speaks</Link>
                                    </li>
                                    <li className='py-1 px-4 changeonhover '>
                                        <Link to={"/our-team"} className=' fw-normal  text-black text-decoration-none '>Our Team</Link>
                                    </li>
                                    <li className='py-1 px-4 changeonhover '>
                                        <Link to={"/csr-social-responsibility"} className=' fw-normal  text-black text-decoration-none '>CSR Social Responsibility</Link>
                                    </li>
                                    <li className='py-1 px-4 changeonhover '>
                                        <Link to={"/newsletter"} className=' fw-normal  text-black text-decoration-none '>Newsletter</Link>
                                    </li>
                                    <li className='py-1 px-4 changeonhover '>
                                        <Link href="#" className=' fw-normal  text-black text-decoration-none '>NRI Corner</Link>
                                    </li>
                                    <li className='py-1 px-4 changeonhover '>
                                        <Link href="#" className=' fw-normal  text-black text-decoration-none '>Why Invest in Jodhpur </Link>
                                    </li>
                                    <li className='py-1 px-4 changeonhover '>
                                        <Link href="#" className=' fw-normal  text-black text-decoration-none '> Corporate Prof </Link>
                                    </li>
                                </ul>
                            </Nav.Link>
                            <Nav.Link href="#link" className='fs-5 text-black px-4 ps-0 ps-xl-3 click_and_show position-relative' >
                                Projects
                                <div className='samosa'></div>
                                <ul className='border_top-bottom position-absolute bg-white project px-0 py-3 mt-4'>
                                    <li className='py-1 px-4 changeonhover '>
                                        <Link to="#" className=' text-black text-decoration-none '>Residential</Link>
                                    </li>
                                    <li className='py-1 px-4 changeonhover '>
                                        <Link to="#" className=' text-black text-decoration-none '>Commercial</Link>
                                    </li>
                                    <li className='py-1 px-4 changeonhover '>
                                        <Link to="#" className=' text-black text-decoration-none '>Rental & Lease</Link>
                                    </li>
                                    <li className='py-1 px-4 changeonhover '>
                                        <Link to="#" className=' text-black text-decoration-none '>Hospitality</Link>
                                    </li>
                                    <li className='py-1 px-4 changeonhover '>
                                        <Link to="#" className=' text-black text-decoration-none '>Education</Link>
                                    </li>
                                    <li className='py-1 px-4 changeonhover '>
                                        <Link to="#" className=' text-black text-decoration-none '>Windmills</Link>
                                    </li>
                                    <li className='py-1 px-4 changeonhover '>
                                        <Link to="#" className=' text-black text-decoration-none '>NRI township</Link>
                                    </li>
                                    <li className='py-1 px-4 changeonhover '>
                                        <Link to="#" className=' text-black text-decoration-none '>Upcomming Projects</Link>
                                    </li>
                                </ul>
                            </Nav.Link>
                            <Nav.Link href="#link" className='fs-5 text-black px-4 ps-0 ps-xl-3 ' >Media and Events</Nav.Link>
                            <Nav.Link href="#link" className='fs-5 text-black px-4 ps-0 ps-xl-3 ' >Bloges</Nav.Link>
                            <Nav.Link href="#link" className='fs-5 text-black px-4 ps-0 ps-xl-3 ' >Contact us</Nav.Link>
                            <Form />

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}
function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className=' rounded-2 bg-white text-dark border-black my-2 '>
                <FontAwesomeIcon icon={faBars} />
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title> <img src={logo1} className=' logo_image2' alt="" /> </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="ms-auto my-3">
                        <Nav.Link to="/" className='fs-6 fw-bold   px-4 ps-0 ps-xl-3'>Home</Nav.Link>
                        <Nav.Link href="#link" className='fs-6 fw-bold  px-4 ps-0 ps-xl-3 ' >About us</Nav.Link>
                        <Nav.Link href="#link" className='fs-6 fw-bold  px-4 ps-0 ps-xl-3 ' >Projects</Nav.Link>
                        <Nav.Link href="#link" className='fs-6 fw-bold  px-4 ps-0 ps-xl-3 ' >Media and Events</Nav.Link>
                        <Nav.Link href="#link" className='fs-6 fw-bold  px-4 ps-0 ps-xl-3 ' >Bloges</Nav.Link>
                        <Nav.Link href="#link" className='fs-6 fw-bold  px-4 ps-0 ps-xl-3 ' >Contact us</Nav.Link>
                        <hr />
                        <h5 className=' text-uppercase colour_change'>Connect</h5>
                        <div className=' d-flex align-items-end'>
                            <h5 className='mb-0  mt-3'>Email: </h5>
                            <a className=' px-2 colour_blue text-decoration-none' href='marketing@ashapurna.com'>marketing@ashapurna.com</a>
                        </div>
                        <div className=' d-flex align-items-end'>
                            <h5 className='mb-0  mt-3'>Phone: </h5>
                            <a className=' px-2 colour_blue text-decoration-none ' href='tel : 9314041747'>9314041747</a>
                        </div>
                        <hr />
                        <h5 className=' text-uppercase colour_change'>social connect</h5>
                        <div className='row row-cols-5 mb-3 '>
                            <span className='social_media ms-2 mt-1 '><FontAwesomeIcon icon={faFacebookF} /></span>
                            <span className='social_media ms-2 mt-1 '><FontAwesomeIcon icon={faTwitter} /></span>
                            <span className='social_media ms-2 mt-1 '><FontAwesomeIcon icon={faInstagram} /></span>
                            <span className='social_media ms-2 mt-1 '><FontAwesomeIcon icon={faLinkedinIn} /></span>
                            <span className='social_media ms-2 mt-1 '><FontAwesomeIcon icon={faYoutube} /></span>
                        </div>
                        <Form />
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}


function Form() {
    let [formShow, setShowForm] = useState(false);
    let forinde = () => {
        setShowForm(true)
        // alert("hello")
    }
    let forhide = () => {
        setShowForm(false)
    }

    return (
        <>
            <button onClick={forinde} className=' rounded-3 border-0 px-2 ms-3  text-uppercase brown_bg text-light fw-bold '> Enquery </button>
            <div className={formShow ? "display_show row row-cols-lg-2 shadow-lg bg-white rounded-4 " : "display_hide"} >
                <div className='bg-white p-0 d-lg-flex d-none ' > <img src={form_image} style={{ maxWidth: "100%" }} /> </div>
                <div className='bg-white py-3 position-relative '>
                    <h4 className=' text-uppercase colour_blue'> ENQUIRE NOW</h4>
                    <p className=''>Feel free to connect with us. We will contact with you shortly.</p>
                    <form className='row row-cols-lg-2 row-cols-1 g-3'>
                        <div className=' ps-lg-0 px-1 '>
                            <input type='text' placeholder='Name' className='rounded-1 border-1 py-3 px-3 w-100' />
                        </div>
                        <div className=' ps-lg-0 px-1 '>
                            <input type='text' placeholder='Phone' className='rounded-1 border-1 py-3 px-3 w-100 ' />
                        </div>
                        <div className=' ps-lg-0 px-1 '>
                            <input type='text' placeholder='Email' className='rounded-1 border-1 py-3 px-3 w-100 ' />
                        </div>
                        <div className=' ps-lg-0 px-1 '>
                            <select name="enqProperty" id="enqProperty" required="" className='rounded-1 border-1 py-3 px-3 w-100'>
                                <option class="option-hidden">Select Property</option>
                                <option value="48">Ashapurna Mohan Bagh</option>
                                <option value="47">Ashapurna Girls Hostel Mumbai</option>
                                <option value="43">Buddha Institutions</option>
                                <option value="40">Ashapurna Clarks Inn</option>
                                <option value="38">Ashapurna NRI</option>
                                <option value="33">Ashapurna Crown Plaza</option>
                                <option value="41">Hotel Residency Palace</option>
                                <option value="34">Ashapurna Mall</option>
                                <option value="7">Ashapurna Heritage</option>
                                <option value="45">Ashapurna Kundan Villa</option>
                                <option value="42">Ashapurna Palace</option>
                                <option value="37">Ashapurna Pachpadra</option>
                                <option value="35">Ashapurna Corporate Office</option>
                                <option value="29">Ashapurna Anmol I,II,III</option>
                                <option value="32">Ashapurna Aangan</option>
                                <option value="27">Ashapurna Basera II Phase</option>
                                <option value="31">Ashapurna Sheoganj</option>
                                <option value="21">Ashapurna Nanomax II</option>
                                <option value="10">Ashapurna Paradise</option>
                                <option value="15">Ashapurna Empire</option>
                                <option value="14">Ashapurna Aangan Prime</option>
                                <option value="8">Ashapurna Platinum</option>
                                <option value="6">Ashapurna Tower</option>
                                <option value="30">Ashapurna City</option><option value="17">Ashapurna Nano Plaza</option><option value="19">Chandan Vihar</option><option value="23">Ashapurna Valley</option><option value="26">Ashapurna Golden Valley</option><option value="28">Ashapurna Nagar</option><option value="24">Ashapurna Nano Avenue</option><option value="22">Ashapurna Sanchore</option><option value="20">Ashapurna Jalore</option><option value="18">Ashapurna Township Uchiyarda</option><option value="16">Ashapurna Basera</option><option value="9">Ashapurna Enclave</option><option value="25">Ashapurna Enclave II</option>
                            </select>
                        </div>
                        <textarea className=' w-100 py-3 px-3' style={{ height: "158px" }} >Enter Your Query</textarea>

                    </form>
                    <button className=' bg-white border-0  fw-bolder fs-4 position-absolute top-0 end-0' onClick={forhide} >X</button>
                </div>
            </div>
        </>
    )
}
