import React from 'react'
import { Hadder } from './Commen/Hadder'
import { Container, Row } from 'react-bootstrap'
import scail from './img/CSR-1676448221.jpg'
import gift from './img/gifting_bunglow.webp'
import certi from './img/samajik_sarokar.webp'
import covid19 from './img/covid19.webp'
import flower from './img/blood_donation.webp'
import Footer from './Commen/Footer'
import { Link } from 'react-router-dom'

export default function SocialResponsibility() {
    return (
        <>
            <Hadder />
            <div className="main_aboutus d-flex justify-content-center align-items-center container-fluid">
                <div class="   container">
                    <p class=" text-white text-center fs-4"><Link to={"/"} className=' text-white text-decoration-none'> HOME </Link> / Social Responsibility</p>
                    <h2 class=" text-center fw-bolder fs-1 colour_change">Social Responsibility</h2>
                </div>
            </div>
            <Container className=" my-4 py-4">
                <div className="row align-items-end position-relative ">
                    <h6 class=" text-uppercase m-0 colour_change w-auto ">csr</h6>
                    <span class="showincss"></span>
                </div>
                <h2 className=' fs-1 colour_blue2 fw-bolder mb-4'>
                    Social Events
                </h2>
                <p className='gray mb-5'>
                    Shri Karan Singh Uchiyarda with his zeal and enthusiasm to work for social upliftment of poor people has established a trust named as ‘Shree Magmohan Charitable Trust’, with the association of Ashapurna Buildcon Ltd. works for the welfare of General public by organizing medical camps, social events like large scale marriage functions, Housing and other donations to poor and needy people, charitable activities etc.
                </p>
                <p className='gray'>
                    In Jan -2011 Many families suffered due to illicit liquor tragedy and No. of families ruined because death of young families members. Ashapurna Decided to help out some of poorest families and help them morally and monetary on 28 Aug 2011 in the presence of Honorable M.P (Pali) Sh. Badhri Ram Jakhar.
                </p>
            </Container>
            <Container>
                <Row className="row-cols-2 align-items-center ">
                    <div>
                        <div className="row align-items-end container position-relative ">
                            <h6 class=" text-uppercase p-0 m-0 colour_change w-auto ">BY SHRI KARAN SINGH UCHIYARDA</h6>
                            <span class="showincss"></span>
                        </div>
                        <h3 className='colour_blue2 fs-3 fw-bold my-2 '>Donated 5 VIllas In Uchiayrda</h3>
                        <p className='pe-3 linehight mb-3  gray'>
                            Shri Karan Singh Uchiyarda (Chairman and Managing Director of Ashapurna Buildcon ltd.) and businessman Mr. Arjun Singh Uchiyarda Uchiyarda have decided to give free "Mohankutir" to 5 families in Uchiyarda village in the memory of his father Mohansingh Khinchi. Mr Karan Singh also said it was his father’s dream that nobody in Uchiyarda village should remain homeless. In Uchiyarda there are 5 families who didn’t shelter for their livelihood, those 5 families are Beejaram Bheel, Gurdaram Bheel, Kesharam Bheel, Gordhan Bheel, and Kaluram Meghwal.
                        </p>
                        <p className='pe-4 linehight mb-3 pt-5 gray'>
                            To complete Father’s dream the houses named MOHANKUTEER and their foundation are laid in the presence of all the 36 communities of the village.
                        </p>
                        <p className='pe-4 linehight mb-3 gray'>
                            During the foundation of houses, Mr Arjun Singh Uchiyarda, Malam Singh, Hanwant Singh, Kesar Singh, Parbat Singh, Jitendra Singh, Gaj Singh, Bhawani Singh, Lun Singh, Chandan Singh, Hariram Prajapar and Bhakar ram dewasi were present.
                        </p>
                    </div>
                    <div className=''>
                        <div className='borderbrown text-center py-2 '>
                            <img src={scail} alt="" />
                        </div>
                    </div>
                </Row>
                <Row className="row-cols-2 flex-row-reverse  align-items-center ">
                    <div>
                        <div className="row align-items-end container position-relative ">
                            <h6 class=" text-uppercase p-0 m-0 colour_change w-auto ">
                                BY SMT. PRATHIBA DEVI SINGH PATIL
                            </h6>
                            <span class="showincss"></span>
                        </div>
                        <h3 className='colour_blue2 fs-3 fw-bold my-2 '>
                            Gifting Bungalow To Widow
                        </h3>
                        <p className='pe-3 linehight mb-3  gray'>
                            Her Excellency Smt. Pratibha Devi Singh Patil, the then Governor of Rajasthan and later the Honourable President of India, was there during the gifting of a bungalow to a widow at Ashapurna City on 7th Feb 2007. Commenting on the occasion she said “Everbody wants to earn money but only a few execute their social responsibility well. There are many great people but there are very few good people. Karan Singh, you are both good and great. An invaluable compliment of a lifetime.
                        </p>
                    </div>
                    <div className=''>
                        <div className='borderbrown text-center py-2 '>
                            <img src={gift} alt="" />
                        </div>
                    </div>
                </Row>
                <Row className="row-cols-2 align-items-center ">
                    <div>
                        <div className="row align-items-end container position-relative ">
                            <h6 class=" text-uppercase p-0 m-0 colour_change w-auto ">
                                FLAT HANDING OVER
                            </h6>
                            <span class="showincss"></span>
                        </div>
                        <h3 className='colour_blue2 fs-3 fw-bold my-2 '>
                            Samajik Sarokar
                        </h3>
                        <p className='pe-3 linehight mb-3  gray'>
                            On 8th Dec 2010, Shri Digvijay Singh, General secratery, Congress and past CM of Madhya Pradesh, handed over the keys of a 2 BHK flat in Ashapurna Valley to a poor lady who lost her family members in Mehrangarh Temple rampage in Jodhpur
                        </p>
                    </div>
                    <div className=''>
                        <div className='borderbrown text-center py-2 '>
                            <img src={certi} alt="" />
                        </div>
                    </div>
                </Row>
                <Row className="row-cols-2 flex-row-reverse  align-items-center ">
                    <div>
                        <div className="row align-items-end container position-relative ">
                            <h6 class=" text-uppercase p-0 m-0 colour_change w-auto ">
                                BATTLE AGAINST CORONA
                            </h6>
                            <span class="showincss"></span>
                        </div>
                        <h3 className='colour_blue2 fs-3 fw-bold my-2 '>
                            COVID-19 Relief
                        </h3>
                        <p className='pe-3 linehight mb-3  gray'>
                            While the world was battling COVID-19 pandemic issue, Ashapurna Buildcon stood in solidarity with the nation. During the COVID-19 pandemic, Magmohan Charitable Trust stood in solidarity with the nation and served society with all its might. Apart from establishing a much needed oxygen plant during the lockdown, the trust served more than 75,000 food packets in Uchiyarda during the tough lockdown times and donated 11,11,111 to the Chief Minister Relief Fund. Special quarantine facilities were arranged at 4 star Ashapurna Hotel with 80 beds and 200 beds at Architectural collage Buddha Group, Udaipur during covid-19 epidem
                        </p>
                    </div>
                    <div className=''>
                        <div className='borderbrown text-center py-2 '>
                            <img src={covid19} style={{ "width": "90%" }} alt="" />
                        </div>
                    </div>
                </Row>
                <Row className="row-cols-2 align-items-center ">
                    <div>
                        <div className="row align-items-end container position-relative ">
                            <h6 class=" text-uppercase p-0 m-0 colour_change w-auto ">
                                DONATE BLOOD SAVE LIVES
                            </h6>
                            <span class="showincss"></span>
                        </div>
                        <h3 className='colour_blue2 fs-3 fw-bold my-2 '>
                            Blood Donation Camp
                        </h3>
                        <p className='pe-3 linehight mb-3  gray'>
                            Ashapurna Buildcon Limiteds CMD Karan Singh Uchiyarda has urged people from all walks of life to donate blood and save lives. As part of CSR service activities, he inaugurated a blood donation camp in the Ashapurna Enclave.
                        </p>
                    </div>
                    <div className=''>
                        <div className='borderbrown text-center py-2 '>
                            <img src={flower} style={{ "width": "90%" }} alt="" />
                        </div>
                    </div>
                </Row>
                <h3 className=' text-center my-5 fw-bolder colour_blue2 fs-1'>
                    Social Updates
                </h3>
                <Row className=' row-cols-3 gy-4  '>
                    <div className='mt-5'>
                        <div className='px-3 back_creem_colour rounded-2 '>
                            <div class=" mt-3">
                                <div className=' position-relative borderbrown text-center py-2 bg-white rounded-2 ' style={{ "top": "-33px" }}>
                                    <img src={flower} style={{ "width": "90%" }} alt="" />
                                </div>
                                <div className="card-body px-2 py-3 ">
                                    <h5 className="card-title py-2">
                                        Blanket Distribution
                                    </h5>
                                    <span className='colour_change'>
                                        #By Director of Ashapurna
                                    </span>
                                    <p className="card-text py-2 text12">
                                        On 21st december 2021, Ashapurna group director Shri Harshwardhan Singh distributed...
                                    </p>
                                    <button className="brown_bg text-white p-1 px-3 forhover fs-5 rounded-1 "> Read More </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='px-3 back_creem_colour rounded-2 '>
                            <div class=" mt-3">
                                <div className=' position-relative borderbrown text-center py-2 bg-white rounded-2 ' style={{ "top": "-33px" }}>
                                    <img src={flower} style={{ "width": "90%" }} alt="" />
                                </div>
                                <div className="card-body px-2 py-3 ">
                                    <h5 className="card-title py-2">
                                        Blanket And Food Distribution
                                    </h5>
                                    <span className='colour_change'>
                                        #Ashapurna Apna Ghar
                                    </span>
                                    <p className="card-text py-2 text12">
                                        To include the less priviliged people as part of the 25th anniversary celebration, Ashapurna...
                                    </p>
                                    <button className="brown_bg text-white p-1 px-3 forhover fs-5 rounded-1 "> Read More </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='px-3 back_creem_colour rounded-2 '>
                            <div class=" mt-3">
                                <div className=' position-relative borderbrown text-center py-2 bg-white rounded-2 ' style={{ "top": "-33px" }}>
                                    <img src={flower} style={{ "width": "90%" }} alt="" />
                                </div>
                                <div className="card-body px-2 py-3 ">
                                    <h5 className="card-title py-2">
                                        Seminar On Housing Problems
                                    </h5>
                                    <span className='colour_change'>
                                        #Samajik Sarokar of Ashapurna
                                    </span>
                                    <p className="card-text py-2 text12">
                                        Addressing the housing problem issues, Ashapurna Group organised a seminar on...
                                    </p>
                                    <button className="brown_bg text-white p-1 px-3 forhover fs-5 rounded-1 "> Read More </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='px-3 back_creem_colour rounded-2 '>
                            <div class=" mt-3">
                                <div className=' position-relative borderbrown text-center py-2 bg-white rounded-2 ' style={{ "top": "-33px" }}>
                                    <img src={flower} style={{ "width": "90%" }} alt="" />
                                </div>
                                <div className="card-body px-2 py-3 ">
                                    <h5 className="card-title py-2">
                                        Seminar Labour Housing Solution
                                    </h5>
                                    <span className='colour_change'>
                                        #Industrialist and Builders
                                    </span>
                                    <p className="card-text py-2 text12">
                                        Addressing the housing problem issues, Ashapurna Group organised a seminar on...
                                    </p>
                                    <button className="brown_bg text-white p-1 px-3 forhover fs-5 rounded-1 "> Read More </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='px-3 back_creem_colour rounded-2 '>
                            <div class=" mt-3">
                                <div className=' position-relative borderbrown text-center py-2 bg-white rounded-2 ' style={{ "top": "-33px" }}>
                                    <img src={flower} style={{ "width": "90%" }} alt="" />
                                </div>
                                <div className="card-body px-2 py-3 ">
                                    <h5 className="card-title py-2">
                                        Widow Free Flat Scheme
                                    </h5>
                                    <span className='colour_change'>
                                        #Samajik Sarokar OF Ashapurna
                                    </span>
                                    <p className="card-text py-2 text12">
                                        On the auspicious occasion of Basera Bhoomi Pujan, Ashapurna Group’s CSR wing Shree...
                                    </p>
                                    <button className="brown_bg text-white p-1 px-3 forhover fs-5 rounded-1 "> Read More </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='px-3 back_creem_colour rounded-2 '>
                            <div class=" mt-3">
                                <div className=' position-relative borderbrown text-center py-2 bg-white rounded-2 ' style={{ "top": "-33px" }}>
                                    <img src={flower} style={{ "width": "90%" }} alt="" />
                                </div>
                                <div className="card-body px-2 py-3 ">
                                    <h5 className="card-title py-2">
                                        Awarding Residence
                                    </h5>
                                    <span className='colour_change'>
                                        #Under VMAY 2019
                                    </span>
                                    <p className="card-text py-2 text12">
                                        The programme was presided over by Honourable Shri Govind Mathur, former Chief...
                                    </p>
                                    <button className="brown_bg text-white p-1 px-3 forhover fs-5 rounded-1 "> Read More </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
            <Footer />
        </>
    )
}
