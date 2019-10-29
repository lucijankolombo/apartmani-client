import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Navbar, Button } from 'react-bootstrap';
import image1 from './apartmani-one.png'
import image2 from './apartmani-two.png'
import image3 from './apartmani-three.png'


export const App = () => {
  return <>
    <Container className="mainContainer">
      <Navbar className="bg-dark justify-content-between" variant="dark" sticky="top" fixed="top">
          <Container>
              <Navbar.Brand href="#" size="sm" variant="light" sticky="top" fixed="top">Test1</Navbar.Brand>
              <Button href="#" size="sm" variant="light" sticky="top" fixed="top">Test2</Button>
          </Container>
      </Navbar>
        <Container className="App">
          <header className="App-header">

            <img src={logo} className="App-logo" alt="logo" />

            <h1 className="App-h1">
              Najam Apartmana <br></br> Crikvenica
            </h1>
            <div class="main-content">
              <p>Dobrodošli na našu stranicu!</p>
              <p>Ovdje možete saznati sve o najmu</p>
              <p>i ponudi apartmana na području Crikvenice!</p>
              <p>Ukoliko vas zanima provod ili odmor u Crikvenici, na pravom ste mjestu!</p>
              <p>Imamo najveći izbor apartmana na širem području Rijeke, a osobito Crikvenice</p>
              <p>i imamo izbor za sve ukuse, od obiteljskih apartmana u uskom centru grada</p>
              <p>pa do apartmana najviše klase van buke centra.</p>
            </div>
            <button type="button">Saznajte više</button>
            <a
              className="App-link"
              href="https://en.wikipedia.org/wiki/Crikvenica"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Discover Crikvenica</h3>
            </a>
          </header>
        </Container>
        <Container className="App-two">
           <header className="App-header-two">
              <h1 className="h1-second">Best of what Crikvenica can offer</h1>
              <div class="first-img">
              <img src={image1} height="150px" width="200px"/>
              </div>
              <div class="second-img">
               <img src={image2} height="150px" width="200px"/>
              </div>
              <div class="third-img">
               <img src={image3} height="150px" width="200px"/>
              </div>
          </header>
        </Container>
    </Container>

    </>
}

export default App;
