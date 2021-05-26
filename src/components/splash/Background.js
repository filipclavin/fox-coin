import React, {useRef} from 'react';
import styled from 'styled-components'

import image from '../../resources/splash-image.png'

const BackgroundContainer = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: ${props => 1300 / 2000 * props.offsetWidth}%;
`

const Background = () => {
    const heroElement = useRef(null)

    return(
        <BackgroundContainer ref={heroElement} element={heroElement}/>
    )
}

export default Background
