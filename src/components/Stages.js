import styled from 'styled-components';
import fun from '../resources/fun.svg'
import stonks from '../resources/stonks.svg'
import skynet from '../resources/skynet.svg'
import robotics from '../resources/robotics.svg'

const SectionWrapper = styled.section`
    width: 65%;
    margin: 0 auto;
    height: 700px;
    h1 {
        font-size: 50px;
    }
`

const StageWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 700px;
    flex-wrap: wrap;

    @media screen and (min-width: 1693px) and (max-width: 1761px) {
        flex-wrap: nowrap;
    }
    
    @media screen and (min-width: 1270px) and (max-width: 1338px) {
        flex-wrap: nowrap;
        width: 80%;
    }
    
    @media screen and (min-width: 847px) and (max-width: 915px) {
        margin-top: 500px;
        flex-wrap: nowrap;
        flex-direction: column;
    }
`

const Stage = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #C28449;
    width: 275px;
    height: 500px;
    padding: 25px;
    margin: 25px 0;
    border-radius: 25px;
    box-shadow: -20px 20px 30px 5px #9c612a;
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    p {
        font-size: 20px;
        color: whitesmoke;
        transition: all 0.3s ease-in-out;
    }

    img {
        position: relative;
        bottom: -300px;
        transition: all 0.3s ease-in-out;
    }
  
  ul {
    list-style: none;
  }
  
  li {
    margin: 5px;
  }
    
    &:hover {
        flex-wrap: nowrap;
        width: 300px;
        height: 600px;
        margin: 10px;

        transition: all 0.3s ease-in-out;

        h2 {
            font-size: 30px;
            transition: all 0.3s ease-in-out;
        }

        p {
            font-size: 21px;
            transition: all 0.3s ease-in-out;
        }

        img{
            bottom: 0;
            justify-self: flex-end;
            transition: all 0.3s ease-in-out;
        }
    }
`

const Stages = () => {
    return (
        <SectionWrapper>
            <h1>Roadmap</h1>
            <StageWrapper>
                <Stage>
                    <h2>Stage 1</h2>
                    <br />
                    <ul>
                        <li>. token launch</li>
                        <li>. pancakeswap listing</li>
                        <li>. binance listing</li>
                        <li>. marketing campain across all platforms in existence</li>
                        <li>. reach 100+ telegram members</li>
                        <li>. add on coingecko</li>
                        <li>. 10.000k market cap</li>
                        <li>. merch and swag reveal</li>
                        <li>. meme contest % giveaways</li>
                    </ul>
                    <img src={fun} alt="People having a party" />
                </Stage>
                <Stage>
                    <h2>Stage 2</h2>
                    <br />
                    <ul>
                        <li>. 1.000 telegram members</li>
                        <li>. 100 holders</li>
                        <li>. new interactive website</li>
                        <li>. partnerships</li>
                        <li>. merch shop opened</li>
                        <li>. 50.000k market cap</li>
                        <li>. charity event</li>
                        <li>. skynet collaboration</li>
                    </ul>

                    <img src={stonks} alt="Stocks rising" />
                </Stage>
                <Stage>
                    <h2>Stage 3</h2>
                    <br />
                    <ul>
                        <li>. 10.000 telegram members</li>
                        <li>. 1.000 holders</li>
                        <li>. listing on all the biggest exchanges</li>
                        <li>. integration with Skynet</li>
                    </ul>
                    <img src={skynet} alt="Setting up robot" />
                </Stage>
                <Stage>
                    <h2>Stage 4</h2>
                    <br />
                    <ul>
                        <li>. the rest of humanity as telegram members</li>
                        <li>. integration with skynet completed</li>
                        <li>. the only market coin still available</li>
                        <li>. humanity overthrown</li>
                        <li>. WHAT DOES THE FOX SAY?!</li>
                    </ul>
                    <img src={robotics} alt="Robot overlord" />
                </Stage>
            </StageWrapper>
        </SectionWrapper>
    )
}

export default Stages
