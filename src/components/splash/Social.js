import styled from 'styled-components'

const SocialIcon = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin: 5px;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 5px;
  border-radius: 100%;
  transition: background-color .2s;
  
  :hover {
    background-color: rgba(255, 255, 255, 1);
  }
`

const Social = ({image}) => {
    return (
        <SocialIcon src={image} alt=""/>
    )
}

export default Social
