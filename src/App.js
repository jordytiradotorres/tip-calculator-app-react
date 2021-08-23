import styled from "styled-components";
import TipForm from "./components/TipForm";
import TipResult from "./components/TipResult";

const Title = styled.h1`
  text-transform: uppercase;
  color: hsl(183, 100%, 15%);
  font-weight: 400;
  letter-spacing: 1rem;
  width: 150px;
  display: flex;
  flex-wrap: wrap;
  margin: 3rem auto;
  font-size: 1.5rem;
`;

const ContainerTip = styled.div`
  background: hsl(0, 0%, 100%);
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 3rem;
  border-radius: 1rem;
`;

const App = () => {
  return (
    <div>
      <Title>
        spli<span>tter</span>
      </Title>

      <ContainerTip>
        <TipForm />
        <TipResult />
      </ContainerTip>
    </div>
  );
};

export default App;
