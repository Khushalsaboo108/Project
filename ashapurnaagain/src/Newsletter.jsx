import React from 'react'
import { Hadder } from './Commen/Hadder'
import Footer from './Commen/Footer'
import { Link } from 'react-router-dom'

export default function Newsletter() {
    return (
        <>
            <Hadder />
            <div className="main_aboutus d-flex justify-content-center align-items-center container-fluid">
                <div class="   container">
                    <p class=" text-white text-center fs-4"><Link to={"/"} className=' text-white text-decoration-none'> HOME </Link> / Newsletter</p>
                    <h2 class=" text-center fw-bolder fs-1 colour_change">Newsletter</h2>
                </div>
            </div>
            <Footer />
        </>
    )
}
