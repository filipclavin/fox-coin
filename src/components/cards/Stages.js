import styled from 'styled-components';

const StageWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: space-around;
    width: 65%;
    height: 600px;
    margin: 0 auto;
    flex-wrap: wrap;
`

const Stage = styled.div`
    box-sizing: border-box;
    background-color: #C28449;
    width: 275px;
    height: 500px;
    padding: 25px;
    margin: 25px 0;
    border-radius: 25px;
    box-shadow: -20px 20px 30px 5px #9c612a;
    transition: all 0.2s ease-in-out;
    
    h2 {
        font-weight: 500;
    }

    p {
        font-size: 20px;
        color: whitesmoke;
    }
    
    &:hover {
        width: 300px;
        height: 600px;
        margin: 10px;
        h2 {
            font-size: 30px
        }
        p {
            font-size: 21px;
        }
        transition: all 0.2s ease-in-out;
    }
`

const Stages = () => {
    return (
        <StageWrapper>
            <Stage>
                <h2>Stage 1</h2>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, tenetur architecto obcaecati optio voluptates vitae in dolorem! Accusamus, illo minus.</p>
            </Stage>
            <Stage>
                <h2>Stage 2</h2>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nihil vitae inventore dolore laboriosam modi quam delectus similique, est velit expedita quia cum! Voluptas, rerum!</p>
            </Stage>
            <Stage>
                <h2>Stage 3</h2>
                <br />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quaerat aliquam non perferendis neque, qui illum minus? Cupiditate nostrum amet libero. Iure fugiat facere fugit voluptate dolor ex accusantium incidunt!</p>
            </Stage>
            <Stage>
                <h2>Stage 4</h2>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima omnis reiciendis. Sint expedita rem maiores facilis necessitatibus eveniet dolore placeat sed, reiciendis eum illo tenetur fuga soluta aliquam esse at natus, voluptatum excepturi vel. Atque pariatur illum enim harum?</p>
            </Stage>
        </StageWrapper>
    )
}

export default Stages