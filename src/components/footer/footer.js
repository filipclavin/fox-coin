import Jesper from '../../resources/Jesper.jpg';
import styled from 'styled-components';
import github from '../../resources/github-square.svg';

const StyledFooter = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`

const Team = styled.section`
h2{
 font-size: 45px;
 width: 100%;
 text-align: center;
}
.team-member{
  display: flex;
  flex-direction: column;
  align-items:center;
  .profile{
    max-width:200px;
    border-radius: 50%;
  }
  a img{
    width:30px;
  }
}
`

const Footer = () => {
  return (
  <StyledFooter>
    <Team>
    <h2>The team.</h2>
    <div className="team">
      <div className="team-member">
        <p>Jesper Sjöström</p>
        <p>Guru (Developer)</p>
        <img className="profile" src={Jesper} alt="Jesper"/>
        <a href="https://github.com/SjostromJesper"><img src={github} alt="github link"/></a>
      </div>
    </div>
    </Team>
    <section>
    </section>
  </StyledFooter>
  )
}

export default Footer;