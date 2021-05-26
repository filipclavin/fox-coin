import Stages from './components/Stages'

import { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Description from "./components/splash/Description.js";
import Footer from './components/footer/footer.js';

import image from './resources/splash-image.png'

const GlobalStyle = createGlobalStyle`
h1{
  font-family: 'Quicksand', sans-serif;
}
body{
  font-family: 'Quicksand', sans-serif;
  background-image: url(${image});
  background-size: contain;
  background-repeat: no-repeat;
  height: fit-content;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;


function App() {
  const [navToggleClicked, setNavToggleClicked] = useState(false);

  const toggleNav = () => setNavToggleClicked(!navToggleClicked);

  const handleScroll = () => setNavToggleClicked(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <>
      <Router>
        <Navbar navToggleClicked={navToggleClicked} toggleNav={toggleNav} />
        <Switch>
          <Route path="/about">
            {/* <Projects /> */}
          </Route>
          <Route path="/roadmap">
            {/* <Contact /> */}
          </Route>
          <Route path="/team">
            {/* <Home /> */}
          </Route>
          <Route path="/">
            {/* <Home /> */}
          </Route>
        </Switch>
      </Router>
      <Description />
      <Stages />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
