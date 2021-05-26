import Stages from './components/cards/Stages'
import styled from 'styled-components';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`

function App() {
  return (
    <ContentWrapper>
      <Stages />
    </ContentWrapper>
  )
}

export default App;
