import Stages from './components/cards/Stages'
import styled from 'styled-components';

import { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navbar from './components/navbar/navbar';

const GlobalStyle = createGlobalStyle`
h1{
  font-family: 'Quicksand', sans-serif;
}
body{
  font-family: 'Quicksand', sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`

function App() {
  const [navToggleClicked, setNavToggleClicked] = useState(false);

  const toggleNav = () => setNavToggleClicked(!navToggleClicked);

  const handleScroll = () => setNavToggleClicked(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <ContentWrapper>
    <h1>Hello there</h1>
    <Router>
        <Navbar navToggleClicked={navToggleClicked} toggleNav={toggleNav}/>
          <Switch>
            <Route path="/projects">
              {/* <Projects /> */}
            </Route>
            <Route path="/contact">
              {/* <Contact /> */}
            </Route>
            <Route path="/">
              {/* <Home /> */}
            </Route>
          </Switch>
      </Router>       
    <GlobalStyle />
    </ContentWrapper>
  );
}

export default App;
