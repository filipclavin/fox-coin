import styled from 'styled-components'

const TitleText = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');

  position: absolute;
  font-size: 5em;
  color: rgb(41, 42, 53);
  font-weight: 800;
  top: 1%;
  left: 2%;
  font-family: 'Indie Flower', cursive;
`

const Title = () => {
    return (
        <TitleText>Fox Coin</TitleText>
    )
}

export default Title
