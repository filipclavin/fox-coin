import Github from '../../resources/GitHub_Logo.png';
import styled from 'styled-components';

const StyledFooter = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`

const Social = styled.section`
h2{

}
div img{
  max-width:200px 
}
`

const Footer = () => {
  return (
  <StyledFooter>
    <Social> 
      <h2>How and where to find us.</h2>
      <div>
        <a><img src={Github} alt="github"/></a>
      </div>
    </Social>

    <section>
    </section>
    <section>
    </section>
  </StyledFooter>
  )
}

export default Footer;