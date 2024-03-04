import React from "react";
import { Hadder } from "./Commen/Hadder";
import { Col, Container, Row } from "react-bootstrap";
import comaimage from "./img/quotes.png"
import headimage from "./img/6e449cbb-2eb8-4888-b0d6-bd7d77d8f039-1669299130.jpg";
import headsonimage from "./img/c28d2e5b-7f72-4378-9421-ad2cb6099f77-1669299122.jpg"
import Footer from "./Commen/Footer";
import { Link } from "react-router-dom";

export default function Management() {
  return (
    <>
      <Hadder />
      <div class="main_aboutus d-flex justify-content-center align-items-center container-fluid">
        <div class="   container">
          <p class=" text-white text-center fs-4"><Link to={"/"} className=' text-white text-decoration-none'> HOME </Link> / MANAGEMENT SPEAKS</p>
          <h2 class=" text-center fw-bolder fs-1 colour_change">
            {" "}
            Our Management{" "}
          </h2>
        </div>
      </div>
      <h1 className=" text-center my-4 colour_blue">Board Of Directors</h1>
      <Container>
        <p className="text fs-6">
          Ashapurna Group is a socially responsible company. The group is active
          in almost all spheres of society and works on the ground level to
          bring about meaningful change. Ashapurna has worked in the fields of
          health, education, social awareness, and environment. During the
          challenging time of Covid, the group has worked hand in hand with
          government and non-government agencies. Ashapurna understands its
          responsibility and always strives hard to be with society in times of
          need.
        </p>
      </Container>
      <Container>
        <Row className=" justify-content-between ">
          <Col lg={7} sm={12} className="bgcreem pos px-5 py-3 rounded-1 position-relative" >
            <div class="row align-items-center ">
              <h6 class=" text-uppercase m-0 pe-4 colour_blue2 w-auto ">
                CMD
              </h6>
              <span class="showincss m-0"></span>
            </div>
            <h2 className="colour_blue fs-3">
              Shri Karan Singh Uchiyarda
            </h2>
            <p className="colour_blue2 fs-6 text12 lh-base pe-2">
              Ashapurna Buildcon Ltd. was envisaged and founded by Shri Karan Singh Uchiyarda a visionary with crystal clear foresight and blessed with a strong sense of business acumen. Karan Singh Uchiyarda is a practical man and with his sharp visualization has set forth an enviable legacy. “There is a certain divinity that shapes all ends”. His past projects have all been very well accepted. Every project speaks the shining story itself. The mission statement of the company is “WHERE DREAMS MEET REALITY”.. Ashapurna always tries for...
            </p>
            <button className="blue_back text-white p-2 px-3 forhover fs-5 rounded-1 "> Read More </button>
            <img src={comaimage} className=" position-absolute bottom-0 " />
          </Col>
          <Col lg={4} sm={12}>
            <div className="rounded-circle p-3 circle123">
              <img src={headimage} className=" w-100  h-100  rounded-circle " />
            </div>
          </Col>
        </Row>
        <Row className=" justify-content-between flex-row-reverse my-5 ">
          <Col lg={7} sm={12} className="bgcreem pos px-5 py-3 rounded-1 position-relative" >
            <div class="row align-items-center ">
              <h6 class=" text-uppercase m-0 pe-4 colour_blue2 w-auto ">
                DIRECTOR
              </h6>
              <span class="showincss m-0"></span>
            </div>
            <h2 className="colour_blue fs-3">
              Mr Harshvardhan Singh Uchiyarda
            </h2>
            <p className="colour_blue2 fs-6 text12 lh-base pe-2">
            Regarding their surging success, the Director asserts, “I believe that achievements are what make us and define us and no achievement can be attained without the seed of a dream. Ashapurna Group is a perfect example of this vary philosophy. “Apart from this, he accredits the company’s commendable success to the blessings of their ‘Kuldevi’- Maa Ashapurna. She has been the prime motivation to name the organization as- ‘Ashapurna Buildcon’. As a sign of their utmost gratitude towards their adored goddess-...
            </p>
            <button className="blue_back text-white p-2 px-3 forhover fs-5 rounded-1 "> Read More </button>
            <img src={comaimage} className=" position-absolute bottom-0 " />
          </Col>
          <Col lg={4} sm={12}>
            <div className="rounded-circle p-3 circle123">
              <img src={headsonimage} className=" w-100  h-100  rounded-circle " />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
}
