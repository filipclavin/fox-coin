import styled from 'styled-components'
import FoxImage from '../../resources/sleepy_tired.png'

const Image = styled.img`
width: auto;
height: 250px;`

const Fox = () => {
    return (
        <Image src={FoxImage} alt=""/>
    )
}

export default Fox;
