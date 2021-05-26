import Github from '../../resources/GitHub_Logo.png';

const Footer = () => {
  return (
  <section>
    <Social> 
      <h2>How and where to find us</h2>
      <div>
        <a><img src={Github} alt="github"/></a>
      </div>
    </Social>

    <Team>
    </Team>
    <Contact>
    </Contact>
  </section>
  )
}

export default Footer;