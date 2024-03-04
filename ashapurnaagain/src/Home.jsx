import React from 'react'
import { Hadder } from './Commen/Hadder'
import { Card, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick';
import "./main.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import first_image from "./img/budget-villas-for-sale-in-jodhpur-ashapurna-anmol-1680947635.webp"
import Aboutus_image from "./img/aboutus.webp"
import image_for_experience from "./img/experience-check.png"
import home_logo from "./img/property.svg"
import ourwork_image from "./img/ashapurna-kundan-villa-coming-soon-1681986511.webp"
import ourwork_logo from "./img/ashapurna-kundan-villa-3-bhk-villa-in-jodhpur-logo-1679382577.webp"
import ourwork_summing from "./img/84304cb5-267a-47cd-8ddf-ee82fb437cea-1672297769.svg"
import ourwork_bilding from "./img/ashapurna-tower-aprtment-in-paota-jodhpur-1682058189.webp"
import buildingimg_logo from "./img/ashapurna-tower-logo-1677497040.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouse, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import person_image from "./img/komal-1682513334.webp"
import dote_image from "./img/bg_dots.png"
import coma_image from "./img/quotes.png"
import media_image from "./img/janmasthami_event_banner_anmol-1694867535.webp"
import Footer from './Commen/Footer';

// Banner Image
let settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

// About us , PROJECT OVERVIEW (on big screen)
let slider = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
}

// Why us slider for md
let whyus_slider = {
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
}
// Why us slider for sm
let whyus_slider2 = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
}

export const Home = () => {
    return (
        <>
            <Hadder />
            <Container>
                <Slider {...settings}>
                    <div className=''>
                        <img src={first_image} alt="" className=' img-fluid for_zindex' />
                    </div>
                    <div className=''>
                        <img src={first_image} alt="" className=' img-fluid for_zindex' />
                    </div>
                    <div className=''>
                        <img src={first_image} alt="" className=' img-fluid for_zindex' />
                    </div>
                </Slider>
            </Container>
            <Container className=' d-none d-lg-block '>
                <form className='row row-cols-6 bg-white p-2 border_bottom shadow-lg rounded-top-2 my-1  ' action="">
                    <div className='p-0 mx-1'>
                        <input type="text" placeholder='Name' className='py-3 rounded-1 px-1 border-1 me-1 my-3' />
                    </div>
                    <div className='p-0 mx-1'>
                        <input type="text" placeholder='Name' className='py-3 rounded-1 px-1 border-1 me-1 my-3' />
                    </div>
                    <div className='p-0 mx-1'>
                        <input type="text" placeholder='Name' className='py-3 rounded-1 px-1 border-1 me-1 my-3' />
                    </div>
                    <div className='p-0 mx-1'>
                        <input type="text" placeholder='Name' className='py-3 rounded-1 px-1 border-1 me-1 my-3' />
                    </div>
                    <div className='p-0 mx-1'>
                        <input type="text" placeholder='Name' className='py-3 rounded-1 px-1 border-1 me-1 my-3' />
                    </div>

                </form>
            </Container>
            <Container className='row mx-auto my-5 pt-6 position-relative '>

                <div className=' col-12 col-lg-5  text-center mb-5 '>
                    <img src={Aboutus_image} className=' width ' alt="" />
                </div>

                <div className='py-2 ps-4 col-12 col-lg-7 '>
                    <div className='row align-items-end '>
                        <h6 className=' text-uppercase m-0 colour_change w-auto '>about us</h6>
                        <span className='showincss'></span>
                    </div>
                    <h2 className='colour_blue fs-1  my-3'>Welcome to Ashapurna</h2>
                    <p className=' fs-6 '>
                        Ashapurna Buildcon started its journey in 1996 as a private limited company and within a year the company gained many core values and turned into a limited company.
                    </p>
                    <p>
                        In a relatively short period of time, Ashapurna has grown and gained a trustworthy real estate name in the entire Rajasthan. The company always tried hard to deliver everything best to its customers and built all their categories-Luxury, Mix segments, and affordable homes.
                    </p>
                </div>
                <div className=' position-absolute forscrol d-none d-lg-block'>
                    <div className='px-3 py-3 row row-cols-5 justify-content-between  align-items-center'>
                        <div className='p-0 m-0'>
                            <div className=' text-center d-flex justify-content-center align-items-center flex-column '>
                                <div className='w-50 p-3 bg-white  rounded-2 row justify-content-center align-items-center '>
                                    <img src={image_for_experience} alt="" className=' w-100 p-0 ' />
                                </div>
                                <h5 className=' m-0 text-center py-2 fs-3 fw-bold '>26</h5>
                                <h6 className='fs-6 m-0 '>Years Of Experience</h6>
                            </div>
                        </div>
                        <div className='p-0 m-0'>
                            <div className=' text-center d-flex justify-content-center align-items-center flex-column '>
                                <div className='w-50 p-3 bg-white  rounded-2 row justify-content-center align-items-center '>
                                    <img src={image_for_experience} alt="" className=' w-100 p-0 ' />
                                </div>
                                <h5 className=' m-0 text-center py-2 fs-3 fw-bold '>26</h5>
                                <h6 className='fs-6 m-0 '>Years Of Experience</h6>
                            </div>
                        </div>
                        <div className='p-0 m-0'>
                            <div className=' text-center d-flex justify-content-center align-items-center flex-column '>
                                <div className='w-50 p-3 bg-white  rounded-2 row justify-content-center align-items-center '>
                                    <img src={image_for_experience} alt="" className=' w-100 p-0 ' />
                                </div>
                                <h5 className=' m-0 text-center py-2 fs-3 fw-bold '>26</h5>
                                <h6 className='fs-6 m-0 '>Years Of Experience</h6>
                            </div>
                        </div>
                        <div className='p-0 m-0'>
                            <div className=' text-center d-flex justify-content-center align-items-center flex-column '>
                                <div className='w-50 p-3 bg-white  rounded-2 row justify-content-center align-items-center '>
                                    <img src={image_for_experience} alt="" className=' w-100 p-0 ' />
                                </div>
                                <h5 className=' m-0 text-center py-2 fs-3 fw-bold '>26</h5>
                                <h6 className='fs-6 m-0 '>Years Of Experience</h6>
                            </div>
                        </div>
                        <div className='p-0 m-0'>
                            <div className=' text-center d-flex justify-content-center align-items-center flex-column '>
                                <div className='w-50 p-3 bg-white  rounded-2 row justify-content-center align-items-center '>
                                    <img src={image_for_experience} alt="" className=' w-100 p-0 ' />
                                </div>
                                <h5 className=' m-0 text-center py-2 fs-3 fw-bold '>26</h5>
                                <h6 className='fs-6 m-0 '>Years Of Experience</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' d-lg-none d-block '>
                    <Slider {...slider}>
                        <div>
                            <div className='p-0 m-0'>
                                <div className=' text-center d-flex justify-content-center align-items-center flex-column '>
                                    <div className='w-50 p-3 bg-white  rounded-2 row justify-content-center align-items-center '>
                                        <img src={image_for_experience} alt="" className=' w-100 p-0 ' />
                                    </div>
                                    <h5 className=' m-0 text-center py-2 fs-3 fw-bold '>26</h5>
                                    <h6 className='fs-6 m-0 '>Years Of Experience</h6>
                                </div>
                            </div>
                        </div>
                        <div className='p-0 m-0'>
                            <div className=' text-center d-flex justify-content-center align-items-center flex-column '>
                                <div className='w-50 p-3 bg-white  rounded-2 row justify-content-center align-items-center '>
                                    <img src={image_for_experience} alt="" className=' w-100 p-0 ' />
                                </div>
                                <h5 className=' m-0 text-center py-2 fs-3 fw-bold '>26</h5>
                                <h6 className='fs-6 m-0 '>Years Of Experience</h6>
                            </div>
                        </div>
                        <div className='p-0 m-0'>
                            <div className=' text-center d-flex justify-content-center align-items-center flex-column '>
                                <div className='w-50 p-3 bg-white  rounded-2 row justify-content-center align-items-center '>
                                    <img src={image_for_experience} alt="" className=' w-100 p-0 ' />
                                </div>
                                <h5 className=' m-0 text-center py-2 fs-3 fw-bold '>26</h5>
                                <h6 className='fs-6 m-0 '>Years Of Experience</h6>
                            </div>
                        </div>
                        <div className='p-0 m-0'>
                            <div className=' text-center d-flex justify-content-center align-items-center flex-column '>
                                <div className='w-50 p-3 bg-white  rounded-2 row justify-content-center align-items-center '>
                                    <img src={image_for_experience} alt="" className=' w-100 p-0 ' />
                                </div>
                                <h5 className=' m-0 text-center py-2 fs-3 fw-bold '>26</h5>
                                <h6 className='fs-6 m-0 '>Years Of Experience</h6>
                            </div>
                        </div>
                        <div className='p-0 m-0'>
                            <div className=' text-center d-flex justify-content-center align-items-center flex-column '>
                                <div className='w-50 p-3 bg-white  rounded-2 row justify-content-center align-items-center '>
                                    <img src={image_for_experience} alt="" className=' w-100 p-0 ' />
                                </div>
                                <h5 className=' m-0 text-center py-2 fs-3 fw-bold '>26</h5>
                                <h6 className='fs-6 m-0 '>Years Of Experience</h6>
                            </div>
                        </div>
                    </Slider>
                </div>
            </Container>
            <Container fluid className='creem'>
                <Container className=' mx-auto position-relative '>
                    <div className=' col-lg-4 col-12  mt-5 mb-4 py-3'>
                        <div class="row align-items-end ">
                            <h6 class=" text-uppercase m-0 colour_change w-auto ">why us</h6>
                            <span class="showincss"></span>
                        </div>
                        <h2 class="colour_blue fs-1 my-3">Why Ashapurna Is The Best Choice</h2>
                        <p class=" fs-6 ">
                            Ashapurna Buildcon started its journey in 1996 as a private limited company and within a year the company gained many core values and turned into a limited company.
                        </p>
                    </div>
                    <div className=' col-7 d-none d-lg-block  position-absolute top end-0 '>
                        <div className='row row-cols-2 g-2 '>
                            <div>
                                <div className='bg-white for_change rounded-top-4 py-3 px-4 position-relative border_bottom'>
                                    <div className='row flex-column'>
                                        <img src={home_logo} className=" py-3  " style={{ width: "30%" }} />
                                        <h5 className=' fs-3 pe- fw-bold '>
                                            Property Care Service
                                        </h5>
                                        <span class="showincss my-2  "></span>
                                        <p class=" fs-6 ">
                                            We take care of your home like a true custodian. Our support team is usually there that will help you with everything and complete your needs.
                                        </p>
                                        <p className='colour_change'>
                                            Read More
                                        </p>
                                        <div className=' position-absolute fordiv'></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='bg-white for_change rounded-top-4 py-3 px-4 position-relative border_bottom'>
                                    <div className='row flex-column'>
                                        <img src={home_logo} className=" py-3  " style={{ width: "30%" }} />
                                        <h5 className=' fs-3 pe- fw-bold '>
                                            Property Care Service
                                        </h5>
                                        <span class="showincss my-2  "></span>
                                        <p class=" fs-6 ">
                                            We take care of your home like a true custodian. Our support team is usually there that will help you with everything and complete your needs.
                                        </p>
                                        <p className='colour_change'>
                                            Read More
                                        </p>
                                        <div className=' position-absolute fordiv'></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='bg-white for_change rounded-top-4 py-3 px-4 position-relative border_bottom'>
                                    <div className='row flex-column'>
                                        <img src={home_logo} className=" py-3  " style={{ width: "30%" }} />
                                        <h5 className=' fs-3 pe- fw-bold '>
                                            Property Care Service
                                        </h5>
                                        <span class="showincss my-2  "></span>
                                        <p class=" fs-6 ">
                                            We take care of your home like a true custodian. Our support team is usually there that will help you with everything and complete your needs.
                                        </p>
                                        <p className='colour_change'>
                                            Read More
                                        </p>
                                        <div className=' position-absolute fordiv'></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='bg-white for_change rounded-top-4 py-3 px-4 position-relative border_bottom'>
                                    <div className='row flex-column'>
                                        <img src={home_logo} className=" py-3  " style={{ width: "30%" }} />
                                        <h5 className=' fs-3 pe- fw-bold '>
                                            Property Care Service
                                        </h5>
                                        <span class="showincss my-2  "></span>
                                        <p class=" fs-6 ">
                                            We take care of your home like a true custodian. Our support team is usually there that will help you with everything and complete your needs.
                                        </p>
                                        <p className='colour_change'>
                                            Read More
                                        </p>
                                        <div className=' position-absolute fordiv'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-lg-none d-md-block d-none '>
                        <Slider {...whyus_slider}>
                            <div className='px-2'>
                                <div className='bg-white for_change rounded-top-4 py-3 px-4 position-relative border_bottom'>
                                    <div className='row flex-column'>
                                        <img src={home_logo} className=" py-3  " style={{ width: "30%" }} />
                                        <h5 className=' fs-3 pe- fw-bold '>
                                            Property Care Service
                                        </h5>
                                        <span class="showincss my-2  "></span>
                                        <p class=" fs-6 ">
                                            We take care of your home like a true custodian. Our support team is usually there that will help you with everything and complete your needs.
                                        </p>
                                        <p className='colour_change'>
                                            Read More
                                        </p>
                                        <div className=' position-absolute fordiv'></div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className='bg-white for_change rounded-top-4 py-3 px-4 position-relative border_bottom'>
                                    <div className='row flex-column'>
                                        <img src={home_logo} className=" py-3  " style={{ width: "30%" }} />
                                        <h5 className=' fs-3 pe- fw-bold '>
                                            Property Care Service
                                        </h5>
                                        <span class="showincss my-2  "></span>
                                        <p class=" fs-6 ">
                                            We take care of your home like a true custodian. Our support team is usually there that will help you with everything and complete your needs.
                                        </p>
                                        <p className='colour_change'>
                                            Read More
                                        </p>
                                        <div className=' position-absolute fordiv'></div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className='bg-white for_change rounded-top-4 py-3 px-4 position-relative border_bottom'>
                                    <div className='row flex-column'>
                                        <img src={home_logo} className=" py-3  " style={{ width: "30%" }} />
                                        <h5 className=' fs-3 pe- fw-bold '>
                                            Property Care Service
                                        </h5>
                                        <span class="showincss my-2  "></span>
                                        <p class=" fs-6 ">
                                            We take care of your home like a true custodian. Our support team is usually there that will help you with everything and complete your needs.
                                        </p>
                                        <p className='colour_change'>
                                            Read More
                                        </p>
                                        <div className=' position-absolute fordiv'></div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className='bg-white for_change rounded-top-4 py-3 px-4 position-relative border_bottom'>
                                    <div className='row flex-column'>
                                        <img src={home_logo} className=" py-3  " style={{ width: "30%" }} />
                                        <h5 className=' fs-3 pe- fw-bold '>
                                            Property Care Service
                                        </h5>
                                        <span class="showincss my-2  "></span>
                                        <p class=" fs-6 ">
                                            We take care of your home like a true custodian. Our support team is usually there that will help you with everything and complete your needs.
                                        </p>
                                        <p className='colour_change'>
                                            Read More
                                        </p>
                                        <div className=' position-absolute fordiv'></div>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                    <div className='d-lg-none d-md-none d-block '>
                        <Slider {...whyus_slider2}>
                            <div className='px-2'>
                                <div className='bg-white for_change rounded-top-4 py-3 px-4 position-relative border_bottom'>
                                    <div className='row flex-column'>
                                        <img src={home_logo} className=" py-3  " style={{ width: "30%" }} />
                                        <h5 className=' fs-3 pe- fw-bold '>
                                            Property Care Service
                                        </h5>
                                        <span class="showincss my-2  "></span>
                                        <p class=" fs-6 ">
                                            We take care of your home like a true custodian. Our support team is usually there that will help you with everything and complete your needs.
                                        </p>
                                        <p className='colour_change'>
                                            Read More
                                        </p>
                                        <div className=' position-absolute fordiv'></div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className='bg-white for_change rounded-top-4 py-3 px-4 position-relative border_bottom'>
                                    <div className='row flex-column'>
                                        <img src={home_logo} className=" py-3  " style={{ width: "30%" }} />
                                        <h5 className=' fs-3 pe- fw-bold '>
                                            Property Care Service
                                        </h5>
                                        <span class="showincss my-2  "></span>
                                        <p class=" fs-6 ">
                                            We take care of your home like a true custodian. Our support team is usually there that will help you with everything and complete your needs.
                                        </p>
                                        <p className='colour_change'>
                                            Read More
                                        </p>
                                        <div className=' position-absolute fordiv'></div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className='bg-white for_change rounded-top-4 py-3 px-4 position-relative border_bottom'>
                                    <div className='row flex-column'>
                                        <img src={home_logo} className=" py-3  " style={{ width: "30%" }} />
                                        <h5 className=' fs-3 pe- fw-bold '>
                                            Property Care Service
                                        </h5>
                                        <span class="showincss my-2  "></span>
                                        <p class=" fs-6 ">
                                            We take care of your home like a true custodian. Our support team is usually there that will help you with everything and complete your needs.
                                        </p>
                                        <p className='colour_change'>
                                            Read More
                                        </p>
                                        <div className=' position-absolute fordiv'></div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className='bg-white for_change rounded-top-4 py-3 px-4 position-relative border_bottom'>
                                    <div className='row flex-column'>
                                        <img src={home_logo} className=" py-3  " style={{ width: "30%" }} />
                                        <h5 className=' fs-3 pe- fw-bold '>
                                            Property Care Service
                                        </h5>
                                        <span class="showincss my-2  "></span>
                                        <p class=" fs-6 ">
                                            We take care of your home like a true custodian. Our support team is usually there that will help you with everything and complete your needs.
                                        </p>
                                        <p className='colour_change'>
                                            Read More
                                        </p>
                                        <div className=' position-absolute fordiv'></div>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </Container>
            </Container>
            <Container fluid className='black margin p-1 py-3 d-none d-lg-block '>
                <Container className='py-5 mx-auto '>
                    <div class="row align-items-end ">
                        <h6 class=" text-uppercase m-0 colour_change w-auto ">why us</h6>
                        <span class="showincss"></span>
                    </div>
                    <h2 class=" text-light fw-bolder fs-1 my-2 mb-4 ">Featured Projects</h2>
                    <Slider {...settings}>
                        <div>
                            <div className='row row-cols-2 g-3 my-2  '>
                                <div className=''>
                                    <img src={ourwork_image} alt="" className='w-100' height={250} />
                                </div>
                                <div>
                                    <div className='row row-cols-2 justify-content-start align-items-center '>
                                        <div className=' col-2 p-0 text-center '>
                                            <img src={ourwork_logo} height={60} className=' p-0 ' />
                                        </div>
                                        <div className=' fs-2 col-8 p-0 fw-bolder colour_white'>
                                            Ashapurna Kundan Villa
                                        </div>
                                    </div>
                                    <p className=' text-white ps-3 py-3'>
                                        Ashapurna Kundan Villa is the 40th project launched by Ashapurna Buildcon Limited. The venture hosts Fifty 3 BHK Villas in Jodhpur at a fixed launching price of ₹55 Lakhs. The plan's design is made to provide a 25x50...
                                    </p>
                                    <div className='row row-cols-lg-3 row-cols-2 justify-content-between '>
                                        <div className='row px-2 justify-content-end '>
                                            <div className=' d-inline w-auto p-0'>
                                                <img src={ourwork_summing} height={50} className=' w-100  ' alt="" />
                                            </div>
                                            <div className='row flex-column w-auto pe-0  '>
                                                <div className=' text-uppercase fw-bolder fs-5 colour_change'>summing</div>
                                                <div className=' text-white text-uppercase '>pool</div>
                                            </div>
                                        </div>
                                        <div className='row px-2 justify-content-end '>
                                            <div className=' d-inline w-auto p-0'>
                                                <img src={ourwork_summing} height={50} className=' w-100  ' alt="" />
                                            </div>
                                            <div className='row flex-column w-auto pe-0  '>
                                                <div className=' text-uppercase fw-bolder fs-5 colour_change'>summing</div>
                                                <div className=' text-white text-uppercase '>pool</div>
                                            </div>
                                        </div>
                                        <div className='row px-2 justify-content-end '>
                                            <div className=' d-inline w-auto p-0'>
                                                <img src={ourwork_summing} height={50} className=' w-100  ' alt="" />
                                            </div>
                                            <div className='row flex-column w-auto pe-0  '>
                                                <div className=' text-uppercase fw-bolder fs-5 colour_change'>summing</div>
                                                <div className=' text-white text-uppercase '>pool</div>
                                            </div>
                                        </div>
                                    </div>
                                    <button class=" rounded-3 border-0 px-3  mt-3 py-2 brown_bg text-light fw-bold "> See All </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='row row-cols-2 g-3 my-2  '>
                                <div className=''>
                                    <img src={ourwork_image} alt="" className='w-100' height={250} />
                                </div>
                                <div>
                                    <div className='row row-cols-2 justify-content-start align-items-center '>
                                        <div className=' col-2 p-0 text-center '>
                                            <img src={ourwork_logo} height={60} className=' p-0 ' />
                                        </div>
                                        <div className=' fs-2 col-8 p-0 fw-bolder colour_white'>
                                            Ashapurna Kundan Villa
                                        </div>
                                    </div>
                                    <p className=' text-white ps-3 py-3'>
                                        Ashapurna Kundan Villa is the 40th project launched by Ashapurna Buildcon Limited. The venture hosts Fifty 3 BHK Villas in Jodhpur at a fixed launching price of ₹55 Lakhs. The plan's design is made to provide a 25x50...
                                    </p>
                                    <div className='row row-cols-lg-3 row-cols-2 justify-content-between '>
                                        <div className='row px-2 justify-content-end '>
                                            <div className=' d-inline w-auto p-0'>
                                                <img src={ourwork_summing} height={50} className=' w-100  ' alt="" />
                                            </div>
                                            <div className='row flex-column w-auto pe-0  '>
                                                <div className=' text-uppercase fw-bolder fs-5 colour_change'>summing</div>
                                                <div className=' text-white text-uppercase '>pool</div>
                                            </div>
                                        </div>
                                        <div className='row px-2 justify-content-end '>
                                            <div className=' d-inline w-auto p-0'>
                                                <img src={ourwork_summing} height={50} className=' w-100  ' alt="" />
                                            </div>
                                            <div className='row flex-column w-auto pe-0  '>
                                                <div className=' text-uppercase fw-bolder fs-5 colour_change'>summing</div>
                                                <div className=' text-white text-uppercase '>pool</div>
                                            </div>
                                        </div>
                                        <div className='row px-2 justify-content-end '>
                                            <div className=' d-inline w-auto p-0'>
                                                <img src={ourwork_summing} height={50} className=' w-100  ' alt="" />
                                            </div>
                                            <div className='row flex-column w-auto pe-0  '>
                                                <div className=' text-uppercase fw-bolder fs-5 colour_change'>summing</div>
                                                <div className=' text-white text-uppercase '>pool</div>
                                            </div>
                                        </div>
                                    </div>
                                    <button class=" rounded-3 border-0 px-3  mt-3 py-2 brown_bg text-light fw-bold "> See All </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='row row-cols-2 g-3 my-2  '>
                                <div className=''>
                                    <img src={ourwork_image} alt="" className='w-100' height={250} />
                                </div>
                                <div>
                                    <div className='row row-cols-2 justify-content-start align-items-center '>
                                        <div className=' col-2 p-0 text-center '>
                                            <img src={ourwork_logo} height={60} className=' p-0 ' />
                                        </div>
                                        <div className=' fs-2 col-8 p-0 fw-bolder colour_white'>
                                            Ashapurna Kundan Villa
                                        </div>
                                    </div>
                                    <p className=' text-white ps-3 py-3'>
                                        Ashapurna Kundan Villa is the 40th project launched by Ashapurna Buildcon Limited. The venture hosts Fifty 3 BHK Villas in Jodhpur at a fixed launching price of ₹55 Lakhs. The plan's design is made to provide a 25x50...
                                    </p>
                                    <div className='row row-cols-lg-3 row-cols-2 justify-content-between '>
                                        <div className='row px-2 justify-content-end '>
                                            <div className=' d-inline w-auto p-0'>
                                                <img src={ourwork_summing} height={50} className=' w-100  ' alt="" />
                                            </div>
                                            <div className='row flex-column w-auto pe-0  '>
                                                <div className=' text-uppercase fw-bolder fs-5 colour_change'>summing</div>
                                                <div className=' text-white text-uppercase '>pool</div>
                                            </div>
                                        </div>
                                        <div className='row px-2 justify-content-end '>
                                            <div className=' d-inline w-auto p-0'>
                                                <img src={ourwork_summing} height={50} className=' w-100  ' alt="" />
                                            </div>
                                            <div className='row flex-column w-auto pe-0  '>
                                                <div className=' text-uppercase fw-bolder fs-5 colour_change'>summing</div>
                                                <div className=' text-white text-uppercase '>pool</div>
                                            </div>
                                        </div>
                                        <div className='row px-2 justify-content-end '>
                                            <div className=' d-inline w-auto p-0'>
                                                <img src={ourwork_summing} height={50} className=' w-100  ' alt="" />
                                            </div>
                                            <div className='row flex-column w-auto pe-0  '>
                                                <div className=' text-uppercase fw-bolder fs-5 colour_change'>summing</div>
                                                <div className=' text-white text-uppercase '>pool</div>
                                            </div>
                                        </div>
                                    </div>
                                    <button class=" rounded-3 border-0 px-3  mt-3 py-2 brown_bg text-light fw-bold "> See All </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='row row-cols-2 g-3 my-2  '>
                                <div className=''>
                                    <img src={ourwork_image} alt="" className='w-100' height={250} />
                                </div>
                                <div>
                                    <div className='row row-cols-2 justify-content-start align-items-center '>
                                        <div className=' col-2 p-0 text-center '>
                                            <img src={ourwork_logo} height={60} className=' p-0 ' />
                                        </div>
                                        <div className=' fs-2 col-8 p-0 fw-bolder colour_white'>
                                            Ashapurna Kundan Villa
                                        </div>
                                    </div>
                                    <p className=' text-white ps-3 py-3'>
                                        Ashapurna Kundan Villa is the 40th project launched by Ashapurna Buildcon Limited. The venture hosts Fifty 3 BHK Villas in Jodhpur at a fixed launching price of ₹55 Lakhs. The plan's design is made to provide a 25x50...
                                    </p>
                                    <div className='row row-cols-lg-3 row-cols-2 justify-content-between '>
                                        <div className='row px-2 justify-content-end '>
                                            <div className=' d-inline w-auto p-0'>
                                                <img src={ourwork_summing} height={50} className=' w-100  ' alt="" />
                                            </div>
                                            <div className='row flex-column w-auto pe-0  '>
                                                <div className=' text-uppercase fw-bolder fs-5 colour_change'>summing</div>
                                                <div className=' text-white text-uppercase '>pool</div>
                                            </div>
                                        </div>
                                        <div className='row px-2 justify-content-end '>
                                            <div className=' d-inline w-auto p-0'>
                                                <img src={ourwork_summing} height={50} className=' w-100  ' alt="" />
                                            </div>
                                            <div className='row flex-column w-auto pe-0  '>
                                                <div className=' text-uppercase fw-bolder fs-5 colour_change'>summing</div>
                                                <div className=' text-white text-uppercase '>pool</div>
                                            </div>
                                        </div>
                                        <div className='row px-2 justify-content-end '>
                                            <div className=' d-inline w-auto p-0'>
                                                <img src={ourwork_summing} height={50} className=' w-100  ' alt="" />
                                            </div>
                                            <div className='row flex-column w-auto pe-0  '>
                                                <div className=' text-uppercase fw-bolder fs-5 colour_change'>summing</div>
                                                <div className=' text-white text-uppercase '>pool</div>
                                            </div>
                                        </div>
                                    </div>
                                    <button class=" rounded-3 border-0 px-3  mt-3 py-2 brown_bg text-light fw-bold "> See All </button>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </Container>
            </Container>
            <Container className='mt-3 p-1 py-3 d-lg-none d-block'>
                <div class="row align-items-end ">
                    <h6 class=" text-uppercase m-0 colour_change w-auto ">why us</h6>
                    <span class="showincss"></span>
                </div>
                <h2 class="colour_blue fs-1 mb-0  my-3">Featured Projects</h2>
            </Container>
            <Container fluid className='black p-1 py-5 margin d-lg-none d-block '>
                <Slider {...settings}>
                    <div className='position-relative'>
                        <Container>
                            <div>
                                <div className='margin'>
                                    {/* <div className='  '>
                                        <img src={ourwork_image} className='w-100 position-absolute for_imageshow' />
                                    </div> */}
                                    <div className=' '>
                                        <div>
                                            <div className='row row-cols-2 justify-content-start align-items-center '>
                                                <div className=' col-2 p-0 text-center '>
                                                    <img src={ourwork_logo} height={60} className=' p-0 ' />
                                                </div>
                                                <div className=' fs-2 col-8 p-0 fw-bolder colour_white'>
                                                    Ashapurna Kundan Villa
                                                </div>
                                            </div>
                                            <p className=' text-white ps-3 py-3'>
                                                Ashapurna Kundan Villa is the 40th project launched by Ashapurna Buildcon Limited. The venture hosts Fifty 3 BHK Villas in Jodhpur at a fixed launching price of ₹55 Lakhs. The plan's design is made to provide a 25x50...
                                            </p>
                                            <div className='row row-cols-lg-3 row-cols-2 justify-content-around '>
                                                <div className='row px-2 w-auto  '>
                                                    <div className=' d-inline w-auto p-0'>
                                                        <img src={ourwork_summing} height={50} className=' w-100  ' alt="" />
                                                    </div>
                                                    <div className='row flex-column w-auto pe-0  '>
                                                        <div className=' text-uppercase fw-bolder fs-5 colour_change'>summing</div>
                                                        <div className=' text-white text-uppercase '>pool</div>
                                                    </div>
                                                </div>
                                                <div className='row px-2 w-auto  '>
                                                    <div className=' d-inline w-auto p-0'>
                                                        <img src={ourwork_summing} height={50} className=' w-100  ' alt="" />
                                                    </div>
                                                    <div className='row flex-column w-auto pe-0  '>
                                                        <div className=' text-uppercase fw-bolder fs-5 colour_change'>summing</div>
                                                        <div className=' text-white text-uppercase '>pool</div>
                                                    </div>
                                                </div>
                                                <div className='row px-2 w-auto  '>
                                                    <div className=' d-inline w-auto p-0'>
                                                        <img src={ourwork_summing} height={50} className=' w-100  ' alt="" />
                                                    </div>
                                                    <div className='row flex-column w-auto pe-0  '>
                                                        <div className=' text-uppercase fw-bolder fs-5 colour_change'>summing</div>
                                                        <div className=' text-white text-uppercase '>pool</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button class=" rounded-3 border-0 px-3  mt-3 py-2 brown_bg text-light fw-bold "> See All </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                    <div>
                        <Container>
                            <div>
                                <div className='margin'>
                                    {/* <div className=' position-absolute for_imageshow'>
                                        <img src={ourwork_image} className='w-100' />
                                    </div> */}
                                    <div className=' '>
                                        <div>
                                            <div className='row row-cols-2 justify-content-start align-items-center '>
                                                <div className=' col-2 p-0 text-center '>
                                                    <img src={ourwork_logo} height={60} className=' p-0 ' />
                                                </div>
                                                <div className=' fs-2 col-8 p-0 fw-bolder colour_white'>
                                                    Ashapurna Kundan Villa
                                                </div>
                                            </div>
                                            <p className=' text-white ps-3 py-3'>
                                                Ashapurna Kundan Villa is the 40th project launched by Ashapurna Buildcon Limited. The venture hosts Fifty 3 BHK Villas in Jodhpur at a fixed launching price of ₹55 Lakhs. The plan's design is made to provide a 25x50...
                                            </p>
                                            <div className='row row-cols-lg-3 row-cols-2 justify-content-around '>
                                                <div className='row px-2 w-auto  '>
                                                    <div className=' d-inline w-auto p-0'>
                                                        <img src={ourwork_summing} height={50} className=' w-100  ' alt="" />
                                                    </div>
                                                    <div className='row flex-column w-auto pe-0  '>
                                                        <div className=' text-uppercase fw-bolder fs-5 colour_change'>summing</div>
                                                        <div className=' text-white text-uppercase '>pool</div>
                                                    </div>
                                                </div>
                                                <div className='row px-2 w-auto  '>
                                                    <div className=' d-inline w-auto p-0'>
                                                        <img src={ourwork_summing} height={50} className=' w-100  ' alt="" />
                                                    </div>
                                                    <div className='row flex-column w-auto pe-0  '>
                                                        <div className=' text-uppercase fw-bolder fs-5 colour_change'>summing</div>
                                                        <div className=' text-white text-uppercase '>pool</div>
                                                    </div>
                                                </div>
                                                <div className='row px-2 w-auto  '>
                                                    <div className=' d-inline w-auto p-0'>
                                                        <img src={ourwork_summing} height={50} className=' w-100  ' alt="" />
                                                    </div>
                                                    <div className='row flex-column w-auto pe-0  '>
                                                        <div className=' text-uppercase fw-bolder fs-5 colour_change'>summing</div>
                                                        <div className=' text-white text-uppercase '>pool</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button class=" rounded-3 border-0 px-3  mt-3 py-2 brown_bg text-light fw-bold "> See All </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                    <div>
                        <Container>
                            <div>
                                <div className='margin'>
                                    {/* <div className=' position-absolute for_imageshow'>
                                        <img src={ourwork_image} className='w-100' />
                                    </div> */}
                                    <div className=' '>
                                        <div>
                                            <div className='row row-cols-2 justify-content-start align-items-center '>
                                                <div className=' col-2 p-0 text-center '>
                                                    <img src={ourwork_logo} height={60} className=' p-0 ' />
                                                </div>
                                                <div className=' fs-2 col-8 p-0 fw-bolder colour_white'>
                                                    Ashapurna Kundan Villa
                                                </div>
                                            </div>
                                            <p className=' text-white ps-3 py-3'>
                                                Ashapurna Kundan Villa is the 40th project launched by Ashapurna Buildcon Limited. The venture hosts Fifty 3 BHK Villas in Jodhpur at a fixed launching price of ₹55 Lakhs. The plan's design is made to provide a 25x50...
                                            </p>
                                            <div className='row row-cols-lg-3 row-cols-2 justify-content-around '>
                                                <div className='row px-2 w-auto  '>
                                                    <div className=' d-inline w-auto p-0'>
                                                        <img src={ourwork_summing} height={50} className=' w-100  ' alt="" />
                                                    </div>
                                                    <div className='row flex-column w-auto pe-0  '>
                                                        <div className=' text-uppercase fw-bolder fs-5 colour_change'>summing</div>
                                                        <div className=' text-white text-uppercase '>pool</div>
                                                    </div>
                                                </div>
                                                <div className='row px-2 w-auto  '>
                                                    <div className=' d-inline w-auto p-0'>
                                                        <img src={ourwork_summing} height={50} className=' w-100  ' alt="" />
                                                    </div>
                                                    <div className='row flex-column w-auto pe-0  '>
                                                        <div className=' text-uppercase fw-bolder fs-5 colour_change'>summing</div>
                                                        <div className=' text-white text-uppercase '>pool</div>
                                                    </div>
                                                </div>
                                                <div className='row px-2 w-auto  '>
                                                    <div className=' d-inline w-auto p-0'>
                                                        <img src={ourwork_summing} height={50} className=' w-100  ' alt="" />
                                                    </div>
                                                    <div className='row flex-column w-auto pe-0  '>
                                                        <div className=' text-uppercase fw-bolder fs-5 colour_change'>summing</div>
                                                        <div className=' text-white text-uppercase '>pool</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button class=" rounded-3 border-0 px-3  mt-3 py-2 brown_bg text-light fw-bold "> See All </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                    <div>
                        <Container>
                            <div>
                                <div className='margin'>
                                    {/* <div className=' position-absolute for_imageshow'>
                                        <img src={ourwork_image} className='w-100' />
                                    </div> */}
                                    <div className=' '>
                                        <div>
                                            <div className='row row-cols-2 justify-content-start align-items-center '>
                                                <div className=' col-2 p-0 text-center '>
                                                    <img src={ourwork_logo} height={60} className=' p-0 ' />
                                                </div>
                                                <div className=' fs-2 col-8 p-0 fw-bolder colour_white'>
                                                    Ashapurna Kundan Villa
                                                </div>
                                            </div>
                                            <p className=' text-white ps-3 py-3'>
                                                Ashapurna Kundan Villa is the 40th project launched by Ashapurna Buildcon Limited. The venture hosts Fifty 3 BHK Villas in Jodhpur at a fixed launching price of ₹55 Lakhs. The plan's design is made to provide a 25x50...
                                            </p>
                                            <div className='row row-cols-lg-3 row-cols-2 justify-content-around '>
                                                <div className='row px-2 w-auto  '>
                                                    <div className=' d-inline w-auto p-0'>
                                                        <img src={ourwork_summing} height={50} className=' w-100  ' alt="" />
                                                    </div>
                                                    <div className='row flex-column w-auto pe-0  '>
                                                        <div className=' text-uppercase fw-bolder fs-5 colour_change'>summing</div>
                                                        <div className=' text-white text-uppercase '>pool</div>
                                                    </div>
                                                </div>
                                                <div className='row px-2 w-auto  '>
                                                    <div className=' d-inline w-auto p-0'>
                                                        <img src={ourwork_summing} height={50} className=' w-100  ' alt="" />
                                                    </div>
                                                    <div className='row flex-column w-auto pe-0  '>
                                                        <div className=' text-uppercase fw-bolder fs-5 colour_change'>summing</div>
                                                        <div className=' text-white text-uppercase '>pool</div>
                                                    </div>
                                                </div>
                                                <div className='row px-2 w-auto  '>
                                                    <div className=' d-inline w-auto p-0'>
                                                        <img src={ourwork_summing} height={50} className=' w-100  ' alt="" />
                                                    </div>
                                                    <div className='row flex-column w-auto pe-0  '>
                                                        <div className=' text-uppercase fw-bolder fs-5 colour_change'>summing</div>
                                                        <div className=' text-white text-uppercase '>pool</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button class=" rounded-3 border-0 px-3  mt-3 py-2 brown_bg text-light fw-bold "> See All </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                </Slider>
            </Container>
            {/* sum changing */}
            <Container fluid className='creem creem_height pb-0'>
                <Container>
                    <div class="row align-items-end ">
                        <h6 class=" text-uppercase m-0 colour_change w-auto ">PROJECT OVERVIEW</h6>
                        <span class="showincss"></span>
                    </div>
                    <h2 class="colour_blue fs-2 my-2">Ready & Nearing Completion Projects</h2>
                    <p class=" fs-6 w-75">
                        Meticulously crafted and emotionally designed, Ashapurna homes are the perfect place to be in. A lifestyle benchmark in Rajasthan, today and tomorrow, our successful communities are our biggest achievement.
                    </p>
                    <div className='mt-4'>
                        <div className=''>
                            <Slider {...slider} className='overflow-visible'>
                                <div>
                                    <div className='p-2 position-relative bg-white rounded-3 show_on_hover2'>
                                        <div className='w-100  '>
                                            <img src={ourwork_bilding} alt="" className='w-100' height={200} />
                                            <div className=' position-absolute p-3 building_hover rounded-2 '>
                                                <div className='row align-items-center '>
                                                    <div className=' col-4 '>
                                                        <img src={buildingimg_logo} alt="" className='w-100' />
                                                    </div>
                                                    <h6 className='col-7'> Ashapurna Tower </h6>
                                                </div>
                                                <div>
                                                    <FontAwesomeIcon icon={faLocationDot} className='pe-2' />
                                                    Basni, Basni, Jodhpur, Rajasthan 342008
                                                </div>
                                                <div className=' show_on_hover row '>
                                                    <div className=' col-7 '>
                                                        <FontAwesomeIcon icon={faHouse} className='pe-2' />
                                                        Ready To Move
                                                    </div>
                                                    <button className='black col-4 border-0 py-1 px-3 text-white '>See All</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='p-2 bg-white rounded-3 show_on_hover2'>
                                        <div className='w-100 position-relative '>
                                            <img src={ourwork_bilding} alt="" className='w-100' height={200} />
                                            <div className=' position-absolute p-3 building_hover rounded-2 '>
                                                <div className='row align-items-center '>
                                                    <div className=' col-4 '>
                                                        <img src={buildingimg_logo} alt="" className='w-100' />
                                                    </div>
                                                    <h6 className='col-7'> Ashapurna Tower </h6>
                                                </div>
                                                <div>
                                                    <FontAwesomeIcon icon={faLocationDot} className='pe-2' />
                                                    Basni, Basni, Jodhpur, Rajasthan 342008
                                                </div>
                                                <div className=' show_on_hover row '>
                                                    <div className=' col-7 '>
                                                        <FontAwesomeIcon icon={faHouse} className='pe-2' />
                                                        Ready To Move
                                                    </div>
                                                    <button className='black col-4 border-0 py-1 px-3 text-white '>See All</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='p-2 bg-white rounded-3 show_on_hover2'>
                                        <div className='w-100 position-relative '>
                                            <img src={ourwork_bilding} alt="" className='w-100' height={200} />
                                            <div className=' position-absolute p-3 building_hover rounded-2 '>
                                                <div className='row align-items-center '>
                                                    <div className=' col-4 '>
                                                        <img src={buildingimg_logo} alt="" className='w-100' />
                                                    </div>
                                                    <h6 className='col-7'> Ashapurna Tower </h6>
                                                </div>
                                                <div>
                                                    <FontAwesomeIcon icon={faLocationDot} className='pe-2' />
                                                    Basni, Basni, Jodhpur, Rajasthan 342008
                                                </div>
                                                <div className=' show_on_hover row '>
                                                    <div className=' col-7 '>
                                                        <FontAwesomeIcon icon={faHouse} className='pe-2' />
                                                        Ready To Move
                                                    </div>
                                                    <button className='black col-4 border-0 py-1 px-3 text-white '>See All</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='p-2 bg-white rounded-3 show_on_hover2'>
                                        <div className='w-100 position-relative '>
                                            <img src={ourwork_bilding} alt="" className='w-100' height={200} />
                                            <div className=' position-absolute p-3 building_hover rounded-2 '>
                                                <div className='row align-items-center '>
                                                    <div className=' col-4 '>
                                                        <img src={buildingimg_logo} alt="" className='w-100' />
                                                    </div>
                                                    <h6 className='col-7'> Ashapurna Tower </h6>
                                                </div>
                                                <div>
                                                    <FontAwesomeIcon icon={faLocationDot} className='pe-2' />
                                                    Basni, Basni, Jodhpur, Rajasthan 342008
                                                </div>
                                                <div className=' show_on_hover row '>
                                                    <div className=' col-7 '>
                                                        <FontAwesomeIcon icon={faHouse} className='pe-2' />
                                                        Ready To Move
                                                    </div>
                                                    <button className='black col-4 border-0 py-1 px-3 text-white '>See All</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='p-2 bg-white rounded-3 show_on_hover2'>
                                        <div className='w-100 position-relative '>
                                            <img src={ourwork_bilding} alt="" className='w-100' height={200} />
                                            <div className=' position-absolute p-3 building_hover rounded-2 '>
                                                <div className='row align-items-center '>
                                                    <div className=' col-4 '>
                                                        <img src={buildingimg_logo} alt="" className='w-100' />
                                                    </div>
                                                    <h6 className='col-7'> Ashapurna Tower </h6>
                                                </div>
                                                <div>
                                                    <FontAwesomeIcon icon={faLocationDot} className='pe-2' />
                                                    Basni, Basni, Jodhpur, Rajasthan 342008
                                                </div>
                                                <div className=' show_on_hover row '>
                                                    <div className=' col-7 '>
                                                        <FontAwesomeIcon icon={faHouse} className='pe-2' />
                                                        Ready To Move
                                                    </div>
                                                    <button className='black col-4 border-0 py-1 px-3 text-white '>See All</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='p-2 bg-white rounded-3 show_on_hover2'>
                                        <div className='w-100 position-relative '>
                                            <img src={ourwork_bilding} alt="" className='w-100' height={200} />
                                            <div className=' position-absolute p-3 building_hover rounded-2 '>
                                                <div className='row align-items-center '>
                                                    <div className=' col-4 '>
                                                        <img src={buildingimg_logo} alt="" className='w-100' />
                                                    </div>
                                                    <h6 className='col-7'> Ashapurna Tower </h6>
                                                </div>
                                                <div>
                                                    <FontAwesomeIcon icon={faLocationDot} className='pe-2' />
                                                    Basni, Basni, Jodhpur, Rajasthan 342008
                                                </div>
                                                <div className=' show_on_hover row '>
                                                    <div className=' col-7 '>
                                                        <FontAwesomeIcon icon={faHouse} className='pe-2' />
                                                        Ready To Move
                                                    </div>
                                                    <button className='black col-4 border-0 py-1 px-3 text-white '>See All</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='p-2 bg-white rounded-3 show_on_hover2'>
                                        <div className='w-100 position-relative '>
                                            <img src={ourwork_bilding} alt="" className='w-100' height={200} />
                                            <div className=' position-absolute p-3 building_hover rounded-2 '>
                                                <div className='row align-items-center '>
                                                    <div className=' col-4 '>
                                                        <img src={buildingimg_logo} alt="" className='w-100' />
                                                    </div>
                                                    <h6 className='col-7'> Ashapurna Tower </h6>
                                                </div>
                                                <div>
                                                    <FontAwesomeIcon icon={faLocationDot} className='pe-2' />
                                                    Basni, Basni, Jodhpur, Rajasthan 342008
                                                </div>
                                                <div className=' show_on_hover row '>
                                                    <div className=' col-7 '>
                                                        <FontAwesomeIcon icon={faHouse} className='pe-2' />
                                                        Ready To Move
                                                    </div>
                                                    <button className='black col-4 border-0 py-1 px-3 text-white '>See All</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>

                        </div>
                    </div>
                </Container>
            </Container>
            {/* sum changing */}
            <Container fluid className='black py-5 mt-5 ' >
                <Container>
                    <Row>
                        <div className=' col-lg-4 col-12 pt-3'>
                            <div class="row align-items-end ">
                                <h6 class=" text-uppercase m-0 colour_change w-auto ">OUR TESTIMONIALS</h6>
                                <span class="showincss"></span>
                            </div>
                            <h2 class=" text-white  fs-1 my-2">What They're Saying About Ashapurna</h2>
                            <p className=' text-white fs-6'>
                                From the heart of South Mumbai to the western suburbs and beyond take your pick from our finest addresses in the city. Select a location to view the property.
                            </p>
                            <button className=' border-0  rounded-1 text-white px-4 fs-4 brown_bg py-2'>
                                See all
                            </button>
                        </div>
                        <div className='col-lg-8 px-3 py-0 my-5 col-12 position-relative  '>
                            <div className=' position-absolute adjust'>
                                <img src={dote_image} alt="" />
                            </div>
                            <Slider {...whyus_slider2}>
                                <div className='bg-white mx-1 for_margin_adjust position-relative '>
                                    <div className=' position-absolute gray_circle'></div>
                                    <div className=' position-absolute golding_circle'>
                                        <img src={person_image} className=' images_round rounded-circle' />
                                    </div>
                                    <div className='padding_change'>
                                        <h4 className=' fw-bold  text-center colour_change'>Komal Bhati</h4>
                                        <p className=' text-center '>
                                            Ashapurna Anmol
                                        </p>
                                    </div>
                                    <p>
                                        I'm Komal, I recently bought a villa in Ashapurna Aangan. The society is too great, the view is astounding also. highly recommend everyone to visit the site once and explore the beautiful villas at Ashapurna Aangan.
                                    </p>
                                    <img src={coma_image} className=' position-absolute coma_image' alt="" />
                                </div>
                                <div className='bg-white mx-1 for_margin_adjust position-relative '>
                                    <div className=' position-absolute gray_circle'></div>
                                    <div className=' position-absolute golding_circle'>
                                        <img src={person_image} className=' images_round rounded-circle' />
                                    </div>
                                    <div className='padding_change'>
                                        <h4 className=' fw-bold  text-center colour_change'>Komal Bhati</h4>
                                        <p className=' text-center '>
                                            Ashapurna Anmol
                                        </p>
                                    </div>
                                    <p>
                                        I'm Komal, I recently bought a villa in Ashapurna Aangan. The society is too great, the view is astounding also. highly recommend everyone to visit the site once and explore the beautiful villas at Ashapurna Aangan.
                                    </p>
                                    <img src={coma_image} className=' position-absolute coma_image' alt="" />
                                </div>
                                <div className='bg-white mx-1 for_margin_adjust position-relative '>
                                    <div className=' position-absolute gray_circle'></div>
                                    <div className=' position-absolute golding_circle'>
                                        <img src={person_image} className=' images_round rounded-circle' />
                                    </div>
                                    <div className='padding_change'>
                                        <h4 className=' fw-bold  text-center colour_change'>Komal Bhati</h4>
                                        <p className=' text-center '>
                                            Ashapurna Anmol
                                        </p>
                                    </div>
                                    <p>
                                        I'm Komal, I recently bought a villa in Ashapurna Aangan. The society is too great, the view is astounding also. highly recommend everyone to visit the site once and explore the beautiful villas at Ashapurna Aangan.
                                    </p>
                                    <img src={coma_image} className=' position-absolute coma_image' alt="" />
                                </div>
                            </Slider>
                        </div>
                    </Row>
                </Container>
            </Container>
            <Container>
                <Row className=' justify-content-between my-4'>
                    <h2 class="colour_blue fs-2 my-2 col-7 ">Media and Event</h2>
                    <button className='black text-white px-3 border-0  col-2 fs-5 py-1 rounded-1 '>See all</button>
                </Row>
                <Slider {...slider}>
                    <div className='mx-3'>
                        <Card className=' p-0 mx-3 '>
                            <Card.Img variant="top" src={media_image} className='w-100 p-0' />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='mx-3'>
                        <Card className=' p-0 mx-3 '>
                            <Card.Img variant="top" src={media_image} className='w-100 p-0' />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='mx-3'>
                        <Card className=' p-0 mx-3 '>
                            <Card.Img variant="top" src={media_image} className='w-100 p-0' />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='mx-3'>
                        <Card className='  p-0 mx-3 '>
                            <Card.Img variant="top" src={media_image} className='w-100 p-0' />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='mx-3'>
                        <Card className='  p-0 mx-3 '>
                            <Card.Img variant="top" src={media_image} className='w-100 p-0' />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                </Slider>
            </Container>
            <Footer/>
        </>
    )
}



