import styled from 'styled-components'

const Desc = styled.div`
  margin: 5% 15%;

  h1 {
    font-size: 4em;
  }

  p {
    font-weight: 200;
    padding-left: 5%;
    color: whitesmoke;
  }
`

const Button = styled.div`
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 15px;
  background-color: ${props => props.color};
  padding: 10px 40px;
  margin: 10px;

  transition-property: all;
  transition-duration: 350ms;
  transition-timing-function: ease;
  transition-delay: 0s;

  :hover {
    cursor: pointer;
    box-shadow: 6px 6px 13px 1px rgb(0 0 0 / 12%);
    transform: translate(0px, -8px);
  }
`

const Description = () => {
  return (
    <Desc>
      <h1>Dream big.</h1>
      <h1>Send a fox to the moon.</h1>
      <br />
      <p>
        Fox Coin ($FOX) is not a meme coin. <br />
                    It will be outperforming Ethereum by 2024 and will be connected to the Skynet smartchain. <br />
                    Join us in overthrowing humanity.
                </p>
      <br />
      <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: '5%' }}>
        <Button color="#fd6d6f">
          Buy $FOX
                    </Button>
        <Button color="#458dfc">
          What does the fox say? <br />
                        (read our whitepaper)
                    </Button>
      </div>

    </Desc>
  )
}

export default Description
