import styled from "styled-components";
import Button from "./Button";

import iconDollar from "../images/icon-dollar.svg";
import iconPerson from "../images/icon-person.svg";

const Container = styled.div`
  position: relative;
`;

const GroupBtn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 0.7rem;
  margin-top: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Title = styled.div`
  font-weight: 400;
  margin-bottom: 0.25rem;
  color: hsl(186, 14%, 43%);
`;

const Input = styled.input`
  position: relative;
  width: 100%;
  padding: 0.7rem;
  border-radius: 0.25rem;
  border: none;
  background-color: hsl(189, 41%, 97%);
  text-align: right;
  color: hsl(184, 14%, 56%);
  font-family: "Space mono";
  font-size: 1rem;
  margin-bottom: ${(props) => props.dollar && "2rem"};
  outline: none;
`;

const Img = styled.img`
  position: absolute;
  top: 2.7rem;
  left: 1rem;
`;

const TipForm = () => {
  return (
    <div>
      <Container>
        <Title>Bill</Title>
        <Input type="text" dollar value="0" />
        <Img src={iconDollar} alt="dollar" />
      </Container>

      <div>
        <Title>Select Tip %</Title>
        <GroupBtn>
          <Button>5%</Button>
          <Button>10%</Button>
          <Button>15%</Button>
          <Button>25%</Button>
          <Button>50%</Button>
          <Button>Custom</Button>
        </GroupBtn>
      </div>

      <Container>
        <Title>Number of People</Title>
        <Input type="text" value="0" />
        <Img src={iconPerson} alt="person" />
      </Container>
    </div>
  );
};

export default TipForm;
