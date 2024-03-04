import React from 'react'
import { Hadder } from './Commen/Hadder'
import { Col, Container } from 'react-bootstrap'
import chart from "./img/organization-chart3.jpg"
import Footer from './Commen/Footer'
import { Link } from 'react-router-dom'

export default function OurTeam() {
    return (
        <>
            <Hadder />
            <div class="main_aboutus d-flex justify-content-center align-items-center container-fluid">
                <div class="   container">
                    <p class=" text-white text-center fs-4"><Link to={"/"} className=' text-white text-decoration-none'> HOME </Link> / Our Team</p>
                    <h2 class=" text-center fw-bolder fs-1 colour_change">Our Team</h2>
                </div>
            </div>
            <Container className='my-4'>
                <h1 className='colour_blue2 fw-bolder text-center '>Ashapurna Team</h1>
                <p className='gray mb-5 mt-3'>
                    Shri Karan Singh Uchiyarda, the Founder Chairman & Managing Director of Ashapurna Buildcon, is a man with crystal-clear foresight and strong business acumen. It is his vision that led the company to scale new heights and set new benchmarks of excellence in Jodhpur's real estate scene. Acceptance and popularity of Ashapurna's projects are proof of his passion, skill, and hard work. Besides real estate, Shri Karan Singh Uchiyarda is a known figure in the hospitality sector as well.
                </p>
                <p className='gray'>
                    On one hand, Shri Karan Singh Uchiyarda is a respected name in the Jodhpur's business circle, on the other, he is known for giving back to society through his trust Shree Mag Mohan Charitable Trust. His social welfare work includes medical camps, large-scale marriage functions, housing, and other donation for the poor and needy. What's more, in a very unique and commendable CSR initiative, Ashapurna Buildcon provides a free home to a widow in every project which in itself is living proof of Shri Karan Singh Uchiyardas concern towards the less privileged section of society.
                </p>
                <Col lg={12}>
                    <img src={chart} className='w-100' alt="" />
                </Col>
            </Container>
            <Footer/>
        </>
    )
}
