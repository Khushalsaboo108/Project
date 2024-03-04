import logo from "./logo.svg";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  let [movi, setMovi] = useState([]);
  let [search, setSearch] = useState();
  // let number = 1;
  let [increasdec, setIncrras] = useState(1)
  let increase = () => setIncrras(increasdec = 1 + increasdec)
  let decrease = () => {
    if (increasdec > 1) {
      setIncrras(increasdec = increasdec - 1)
    }
  }
  
  // console.log(search);
  function shwomovi() {
    let apidata;
    if (search) {
      apidata = `https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&query=${search}`
    }
    else {
      apidata = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${increasdec}`
    }
    axios.get(apidata)
      .then((res) => res.data)
      .then((finalres) => {
        setMovi(finalres.results);
      });
  }
  useEffect(() => {
    shwomovi();
  }, []);
  let Catagery = (event) => {
    setSearch(event.target.value);
  };

  let show = movi.map((v, i) => {
    return <Movicard prom={v} key={i} index={i} />;
  });
  return (
    <>
      <Container className="p-0">
        <h1 className=" text-center ">Movi</h1>
        <div className=" text-end ">
          <input type="text" value={search} onChange={Catagery} placeholder="Search" className="my-2 w-25 fs-4 p-1" />
        </div>
        <Row className=" row-cols-lg-4 p-0 g-3 row-cols-2 ">
          {movi < 1 ? "No Data Found" : show}
        </Row>
        <div className=" text-center my-2">
          <button onClick={decrease}> Previous </button> {increasdec} <button onClick={increase}> Next </button>
        </div>
      </Container>
    </>
  );
}

function Movicard({ prom }) {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280` + prom.poster_path} />
        <Card.Body>
          <Card.Title>{prom.title} </Card.Title>
          <Card.Text>
            {prom.overview.slice(0, 150)}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default App;
