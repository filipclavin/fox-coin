import Jesper from '../../resources/Jesper.jpg';
import Filip from '../../resources/filip.jpg';
import Melinda from '../../resources/melinda.png';
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
.team{
  display:flex;
  justify-content:space-around;
  flex-direction: column;
  @media screen and (min-width: 1024px ){
    flex-direction: row;
  }
  .team-member{
  display: flex;
  flex-direction: column;
  align-items:center;
  margin-top: 30px;
  .name{
    font-size: 35px;
    font-weight:300;
  }
  .profile{
    max-width:200px;
    border-radius: 50%;
  }
  a img{
    max-width:200px;
  }
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
        <p className="name">Jesper Sjöström</p>
        <p>Guru (Developer)</p>
        <a href="https://github.com/SjostromJesper"><img className="profile" src={Jesper} alt="Jesper"/>
        </a>
      </div>
      <div className="team-member">
        <p className="name">Filip Calvin</p>
        <p>Hacker (General Developer)</p>
        <a href="https://github.com/filipclavin"><img className="profile" src={Filip} alt="Filip"/>
        </a>
      </div>
      <div className="team-member">
        <p className="name">Melinda Sava</p>
        <p>Kick Ass Developer (Developer)</p>
        <a href="https://github.com/mellyynda"><img className="profile" src={Melinda} alt="Melinda"/></a>
      </div>
    </div>
    </Team>
    <section>
    </section>
  </StyledFooter>
  )
}

export default Footer;
