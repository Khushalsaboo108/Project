import React from 'react'
import { Hadder } from './Commen/Hadder'
import { Col, Container, Row } from 'react-bootstrap'
import aboutus_image from "./img/about us/ashapurna-buildcon-corporate-office-1681628091.webp"
import { Link } from 'react-router-dom'
import images_forpersonal from "./img/about us/experience-check.svg"
import img_3point from "./img/ashapurna-basera-flats-in-jodhpur-1682081467.webp"
import img_logo from "./img/ashapurna-basera-phase-ii-logo-1677495521.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouse } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Slider from 'react-slick'
import idea_image from "./img/about us/ourvision.png"
import img_foolscreen from "./img/about us/floor-plan.jpg"
import Footer from './Commen/Footer'

var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
};

export default function Aboutus() {
    return (
        <>
            <Hadder />
            <Container fluid className='main_aboutus d-flex justify-content-center align-items-center'>
                <Container className='  '>
                    <p className=' text-white text-center fs-4'>
                        <Link to={"/"} className=' text-white text-decoration-none'> HOME </Link> / ABOUT US
                    </p>
                    <h2 className=' text-center fw-bolder fs-1 colour_change'>
                        About Us
                    </h2>
                </Container>
            </Container>
            <Container className='mx-auto  my-5'>
                <Row>
                    <div className=' col-lg-6 col-12 '>
                        <img src={aboutus_image} className=' img-fluid ' alt="" />
                    </div>
                    <div className=' col-lg-6 col-12 '>
                        <div class="row align-items-end forbefor position-relative ">
                            <h6 class=" text-uppercase m-0 colour_change w-auto ">about us</h6>
                            <span class="showincss"></span>
                        </div>
                        <h2 class="colour_blue fs-1  ">Welcome to Ashapurna</h2>
                        <div>
                            <p className=' text'>
                                Ashapurna Buildcon started its journey in 1996 as a private limited company and turned into a limited company after just one year. Ashapurna became the first ISO 9001:2000 certified company in western Rajasthan in 2004. The company’s first offering was a project of 400 villas/plots that came in 1997 and was completed within a record time of 18 months which eventually became a norm in many upcoming projects. In its existence of 27 years, Ashapurna Buildcon has 40 projects and has delivered 36 projects spanning 75,00,000 square feet, housing more than 25,000 smiling and satisfied faces.
                            </p>
                            <p className='text'>
                                Under the able leadership of Shri Karan Singh Uchiyarda, Ashapurna Buildcon has spread its wings across top residential projects in Jodhpur, hospitality, education, and entertainment domains, and commercial property in Jodhpur. Shri Karan Singh Uchiyarda gave ‘Comforts Residency Palace’, a renowned 3-star hotel, to Jodhpur, Hotel Ashapurna to Jaipur and another 5-star resort-cum-hotel is coming up at Uchiyarda. In education, the company owns and runs an architecture institute named ‘Buddha Institute’ in Udaipur. In the past few years, Ashapurna Buildcon has proven itself to the Real Estate market of Rajasthan and conveyed itself as one of the <Link to={"/"} className='colour_change text-decoration-none '>Top 10 Real Estate Companies in Rajasthan</Link> . In its quest to take the idea of lifestyle to the next level, Ashapurna Buildcon has launched premium budget homes that perfectly blend style and practicality.
                            </p>
                        </div>
                    </div>
                </Row>
            </Container>
            <Container className=' mx-auto design_image p-5 my-4'>
                <Row className='gy-5'>
                    <div className=' col-md-3 col-6 flex-column d-flex justify-content-center align-items-center '>
                        <div className=' p-md-3 rounded-2  p-3 bg-white '>
                            <img src={images_forpersonal} alt="" />
                        </div>
                        <h3 className='colour_change py-2 fs-3 fw-bolder   m-0'>
                            26+
                        </h3>
                        <h6 className='  text-white '>
                            Years Of Experience
                        </h6>
                    </div>
                    <div className=' col-md-3 col-6 flex-column d-flex justify-content-center align-items-center '>
                        <div className=' p-md-3 rounded-2  p-3 bg-white '>
                            <img src={images_forpersonal} alt="" />
                        </div>
                        <h3 className='colour_change py-2 fs-3 fw-bolder   m-0'>
                            26+
                        </h3>
                        <h6 className='  text-white '>
                            Years Of Experience
                        </h6>
                    </div>
                    <div className=' col-md-3 col-6 flex-column d-flex justify-content-center align-items-center '>
                        <div className=' p-md-3 rounded-2  p-3 bg-white '>
                            <img src={images_forpersonal} alt="" />
                        </div>
                        <h3 className='colour_change py-2 fs-3 fw-bolder   m-0'>
                            26+
                        </h3>
                        <h6 className='  text-white '>
                            Years Of Experience
                        </h6>
                    </div>
                    <div className=' col-md-3 col-6 flex-column d-flex justify-content-center align-items-center '>
                        <div className=' p-md-3 rounded-2  p-3 bg-white '>
                            <img src={images_forpersonal} alt="" />
                        </div>
                        <h3 className='colour_change py-2 fs-3 fw-bolder   m-0'>
                            26+
                        </h3>
                        <h6 className='  text-white '>
                            Years Of Experience
                        </h6>
                    </div>
                </Row>
            </Container>
            <Container >
                <h2 className=' text-center mt-5 fw-bolder colour_blue'>Feature Projects</h2>
                <Slider {...settings} className='my-3'>
                    <Col lg={4} className=' position-relative  add_hover1233 '>
                        <div className='p-2 bg-white rounded-1 add_hover shadow-lg mx-1 my-5 '>
                            <div className=' position-absolute bg-success rounded-1 text-white somechange p-1'> Readu to move </div>
                            <img src={img_3point} className=' w-100 rounded-1 ' />
                            <div className=' position-absolute shadow-sm bg-white p-3 rounded-1 add_hover12'>
                                <Row className=' align-items-center '>
                                    <img src={img_logo} className='col-3' alt="" />
                                    <p className='m-0 col-7 fw-bold '>
                                        Ashapurna Basera
                                    </p>
                                </Row>
                                <Row className=' my-2 align-items-center '>
                                    <FontAwesomeIcon icon={faLocationDot} className='col-1 ps-0' />
                                    <p className='col-8 m-0 p-0'>Sangariya Bypass Rd, Pal...</p>
                                </Row>
                                <Row className=' align-items-center ashapurna_hover'>
                                    <FontAwesomeIcon icon={faHouse} className='col-1 ps-0' />
                                    <p className='col-5 m-0 p-0'>Ready To Move</p>
                                    <button className='col-3 ms-5 blue_back text-white border-0 py-2 m-0 rounded-1 '> See All</button>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className=' position-relative  add_hover1233 '>
                        <div className='p-2 bg-white rounded-1 add_hover shadow-lg mx-1 my-5 '>
                            <div className=' position-absolute bg-success rounded-1 text-white somechange p-1'> Readu to move </div>
                            <img src={img_3point} className=' w-100 rounded-1 ' />
                            <div className=' position-absolute shadow-sm bg-white p-3 rounded-1 add_hover12'>
                                <Row className=' align-items-center '>
                                    <img src={img_logo} className='col-3' alt="" />
                                    <p className='m-0 col-7 fw-bold '>
                                        Ashapurna Basera
                                    </p>
                                </Row>
                                <Row className=' my-2 align-items-center '>
                                    <FontAwesomeIcon icon={faLocationDot} className='col-1 ps-0' />
                                    <p className='col-8 m-0 p-0'>Sangariya Bypass Rd, Pal...</p>
                                </Row>
                                <Row className=' align-items-center ashapurna_hover'>
                                    <FontAwesomeIcon icon={faHouse} className='col-1 ps-0' />
                                    <p className='col-5 m-0 p-0'>Ready To Move</p>
                                    <button className='col-3 ms-5 blue_back text-white border-0 py-2 m-0 rounded-1 '> See All</button>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className=' position-relative  add_hover1233 '>
                        <div className='p-2 bg-white rounded-1 add_hover shadow-lg mx-1 my-5 '>
                            <div className=' position-absolute bg-success rounded-1 text-white somechange p-1'> Readu to move </div>
                            <img src={img_3point} className=' w-100 rounded-1 ' />
                            <div className=' position-absolute shadow-sm bg-white p-3 rounded-1 add_hover12'>
                                <Row className=' align-items-center '>
                                    <img src={img_logo} className='col-3' alt="" />
                                    <p className='m-0 col-7 fw-bold '>
                                        Ashapurna Basera
                                    </p>
                                </Row>
                                <Row className=' my-2 align-items-center '>
                                    <FontAwesomeIcon icon={faLocationDot} className='col-1 ps-0' />
                                    <p className='col-8 m-0 p-0'>Sangariya Bypass Rd, Pal...</p>
                                </Row>
                                <Row className='align-items-center ashapurna_hover'>
                                    <FontAwesomeIcon icon={faHouse} className='col-1 ps-0' />
                                    <p className='col-5 m-0 p-0'>Ready To Move</p>
                                    <button className='col-3 ms-5 blue_back text-white border-0 py-2 m-0 rounded-1 '> See All</button>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className=' position-relative  add_hover1233 '>
                        <div className='p-2 bg-white rounded-1 add_hover shadow-lg mx-1 my-5 '>
                            <div className=' position-absolute bg-success rounded-1 text-white somechange p-1'> Readu to move </div>
                            <img src={img_3point} className=' w-100 rounded-1 ' />
                            <div className=' position-absolute shadow-sm bg-white p-3 rounded-1 add_hover12'>
                                <Row className=' align-items-center '>
                                    <img src={img_logo} className='col-3' alt="" />
                                    <p className='m-0 col-7 fw-bold '>
                                        Ashapurna Basera
                                    </p>
                                </Row>
                                <Row className=' my-2 align-items-center '>
                                    <FontAwesomeIcon icon={faLocationDot} className='col-1 ps-0' />
                                    <p className='col-8 m-0 p-0'>Sangariya Bypass Rd, Pal...</p>
                                </Row>
                                <Row className='align-items-center ashapurna_hover'>
                                    <FontAwesomeIcon icon={faHouse} className='col-1 ps-0' />
                                    <p className='col-5 m-0 p-0'>Ready To Move</p>
                                    <button className='col-3 ms-5 blue_back text-white border-0 py-2 m-0 rounded-1 '> See All</button>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className=' position-relative  add_hover1233 '>
                        <div className='p-2 bg-white rounded-1 add_hover shadow-lg mx-1 my-5 '>
                            <div className=' position-absolute bg-success rounded-1 text-white somechange p-1'> Readu to move </div>
                            <img src={img_3point} className=' w-100 rounded-1 ' />
                            <div className=' position-absolute shadow-sm bg-white p-3 rounded-1 add_hover12'>
                                <Row className=' align-items-center '>
                                    <img src={img_logo} className='col-3' alt="" />
                                    <p className='m-0 col-7 fw-bold '>
                                        Ashapurna Basera
                                    </p>
                                </Row>
                                <Row className=' my-2 align-items-center '>
                                    <FontAwesomeIcon icon={faLocationDot} className='col-1 ps-0' />
                                    <p className='col-8 m-0 p-0'>Sangariya Bypass Rd, Pal...</p>
                                </Row>
                                <Row className=' align-items-center ashapurna_hover'>
                                    <FontAwesomeIcon icon={faHouse} className='col-1 ps-0' />
                                    <p className='col-5 m-0 p-0'>Ready To Move</p>
                                    <button className='col-3 ms-5 blue_back text-white border-0 py-2 m-0 rounded-1 '> See All</button>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className=' position-relative  add_hover1233 '>
                        <div className='p-2 bg-white rounded-1 add_hover shadow-lg mx-1 my-5 '>
                            <div className=' position-absolute bg-success rounded-1 text-white somechange p-1'> Readu to move </div>
                            <img src={img_3point} className=' w-100 rounded-1 ' />
                            <div className=' position-absolute shadow-sm bg-white p-3 rounded-1 add_hover12'>
                                <Row className=' align-items-center '>
                                    <img src={img_logo} className='col-3' alt="" />
                                    <p className='m-0 col-7 fw-bold '>
                                        Ashapurna Basera
                                    </p>
                                </Row>
                                <Row className=' my-2 align-items-center '>
                                    <FontAwesomeIcon icon={faLocationDot} className='col-1 ps-0' />
                                    <p className='col-8 m-0 p-0'>Sangariya Bypass Rd, Pal...</p>
                                </Row>
                                <Row className=' align-items-center ashapurna_hover'>
                                    <FontAwesomeIcon icon={faHouse} className='col-1 ps-0' />
                                    <p className='col-5 m-0 p-0'>Ready To Move</p>
                                    <button className='col-3 ms-5 blue_back text-white border-0 py-2 m-0 rounded-1 '> See All</button>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Slider>
            </Container>
            <Container fluid className='back_creem mt-5 '>
                <Row className=' justify-content-between container mx-auto row-cols-lg-2 row-cols-1  g-3 gx-2 '>
                    <div className=' p-0 '>
                        <Row className='py-3 my-3 justify-content-center pe-2 image_right_side  shadow-lg bg-white ps-0'>
                            <img src={idea_image} className=' col-lg-4  col-7 my-2 mb-4  ps-0' />
                            <div className=' col-lg-8 col-12  px-4'>
                                <h5 className='fw-bolder fs-4 position-relative line_befor'>
                                    OUR VISION
                                </h5>
                                <p className='mt-4 '>
                                    To be a leader and most preferred real estate name in Rajasthan by constantly striving hard to put innovation and futuristic perspective in every fine detail of designing and execution.
                                </p>
                            </div>
                        </Row>
                    </div>
                    <div className=' p-0 '>
                        <Row className='py-3 my-3 justify-content-center pe-2 image_right_side  shadow-lg bg-white ps-0'>
                            <img src={idea_image} className=' col-lg-4  col-7 my-2 mb-4  ps-0' />
                            <div className=' col-lg-8 col-12  px-4'>
                                <h5 className='fw-bolder fs-4 position-relative line_befor'>
                                    OUR VISION
                                </h5>
                                <p className='mt-4 '>
                                    To be a leader and most preferred real estate name in Rajasthan by constantly striving hard to put innovation and futuristic perspective in every fine detail of designing and execution.
                                </p>
                            </div>
                        </Row>
                    </div>
                </Row>
            </Container>
            <Container className=' mb-3 for_margin images position-relative '>
                <div className=' row justify-content-between  justify-content-md-end  align-self-center '>
                    <div className='col-11 col-md-7 mx-md-0 mx-auto   bg-white p-3 for_right_bottom '>
                        <h2>
                            Our Achievement
                        </h2>
                        <p className='text_justify'>
                            “Indian Leadership Award for Infrastructure Development 2011” for Outstanding Contribution in the Field of Infrastructure Development to Shri Karan Singh Uchiyarda, Chairman & Managing Director, Ashapurna Buildcon by “Indian Economic Development & Research Association, New Delhi”
                        </p>
                        <p className='text_justify'>
                            “Indian Leadership Award for Infrastructure Development 2011” for Outstanding Contribution in the Field of Infrastructure Development to Shri Karan Singh Uchiyarda, Chairman & Managing Director, Ashapurna Buildcon by “Indian Economic Development & Research Association, New Delhi”
                        </p>
                    </div>
                </div>
            </Container>
            <Footer/>
        </>
    )
}



export function Dark_number(){
return(
    <Container className=' mx-auto design_image p-5 my-4'>
                <Row className='gy-5'>
                    <div className=' col-md-3 col-6 flex-column d-flex justify-content-center align-items-center '>
                        <div className=' p-md-3 rounded-2  p-3 bg-white '>
                            <img src={images_forpersonal} alt="" />
                        </div>
                        <h3 className='colour_change py-2 fs-3 fw-bolder   m-0'>
                            26+
                        </h3>
                        <h6 className='  text-white '>
                            Years Of Experience
                        </h6>
                    </div>
                    <div className=' col-md-3 col-6 flex-column d-flex justify-content-center align-items-center '>
                        <div className=' p-md-3 rounded-2  p-3 bg-white '>
                            <img src={images_forpersonal} alt="" />
                        </div>
                        <h3 className='colour_change py-2 fs-3 fw-bolder   m-0'>
                            26+
                        </h3>
                        <h6 className='  text-white '>
                            Years Of Experience
                        </h6>
                    </div>
                    <div className=' col-md-3 col-6 flex-column d-flex justify-content-center align-items-center '>
                        <div className=' p-md-3 rounded-2  p-3 bg-white '>
                            <img src={images_forpersonal} alt="" />
                        </div>
                        <h3 className='colour_change py-2 fs-3 fw-bolder   m-0'>
                            26+
                        </h3>
                        <h6 className='  text-white '>
                            Years Of Experience
                        </h6>
                    </div>
                    <div className=' col-md-3 col-6 flex-column d-flex justify-content-center align-items-center '>
                        <div className=' p-md-3 rounded-2  p-3 bg-white '>
                            <img src={images_forpersonal} alt="" />
                        </div>
                        <h3 className='colour_change py-2 fs-3 fw-bolder   m-0'>
                            26+
                        </h3>
                        <h6 className='  text-white '>
                            Years Of Experience
                        </h6>
                    </div>
                </Row>
            </Container>
)
}