import jesper from '../../resources/jesper.jpg';
import filip from '../../resources/filip.jpg';
import melinda from '../../resources/melinda.png';
import styled from 'styled-components';

const StyledFooter = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-top: 50px;
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
    max-width:175px;
    border-radius: 50%;
    margin-top: 15px;
    &:hover{
      position: relative;
      top: -7px;
    }
  }
  a img{
    max-width:174px;
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
            <a href="https://github.com/SjostromJesper"><img className="profile" src={jesper} alt="Jesper" />
            </a>
          </div>
          <div className="team-member">
            <p className="name">Filip Calvin</p>
            <p>Hacker (Developer)</p>
            <a href="https://github.com/filipclavin"><img className="profile" src={filip} alt="Filip" />
            </a>
          </div>
          <div className="team-member">
            <p className="name">Melinda Sava</p>
            <p>Kick Ass Developer (Developer)</p>
            <a href="https://github.com/mellyynda"><img className="profile" src={melinda} alt="Melinda" /></a>
          </div>
        </div>
      </Team>
      <section>
      </section>
    </StyledFooter>
  )
}

export default Footer;
