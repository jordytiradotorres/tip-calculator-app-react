import styled from "styled-components";
import Button from "./Button";

import iconDollar from "../images/icon-dollar.svg";
import iconPerson from "../images/icon-person.svg";
import { useEffect, useRef } from "react";

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

const MessageError = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  color: #bf2d2d;
`;

const InputPercentageCustom = styled.input`
  background-color: hsl(189, 41%, 97%);
  border: none;
  border-radius: 0.2rem;
  outline: none;
  text-align: right;
  font-family: "Space mono";
  font-weight: 700;
  color: hsl(184, 14%, 56%);
  font-size: 1rem;
  padding: 0.5rem 1rem 0.5rem;
  min-width: 100px;
`;

const TipForm = ({
  dollarValue,
  personNumber,
  handleChange,
  handleClickValue,
  handleChangeCustom,
  handleFocusCustom,
  percentageCustomValue,
}) => {
  dollarValue = Number(dollarValue);
  personNumber = Number(personNumber);

  const dollarRef = useRef();
  const personRef = useRef();
  const inputCustomValue = useRef();

  useEffect(() => {
    if (personRef.current.value === "0") {
      personRef.current.style.border = "thin solid #bf2d2d";
      dollarRef.current.style.border = "thin solid hsl(172,67%,45%)";
    } else {
      personRef.current.style.border = "thin solid transparent";
      dollarRef.current.style.border = "thin solid transparent";
    }
  }, [personNumber]);

  return (
    <div>
      <Container>
        <Title>Bill</Title>

        <Input
          type="number"
          min="0"
          name="dollarValue"
          dollar
          value={dollarValue}
          onChange={handleChange}
          ref={dollarRef}
        />
        <Img src={iconDollar} alt="dollar" />
      </Container>

      <div>
        <Title>Select Tip %</Title>
        <GroupBtn>
          <Button onClick={handleClickValue}>5%</Button>
          <Button onClick={handleClickValue}>10%</Button>
          <Button onClick={handleClickValue}>15%</Button>
          <Button onClick={handleClickValue}>25%</Button>
          <Button onClick={handleClickValue}>50%</Button>
          <InputPercentageCustom
            type="text"
            value={percentageCustomValue}
            onChange={handleChangeCustom}
            onFocus={handleFocusCustom}
            ref={inputCustomValue}
          />
        </GroupBtn>
      </div>

      <Container>
        <Title>Number of People</Title>
        {personNumber === 0 && <MessageError>Can't be zero</MessageError>}
        <Input
          type="number"
          min="0"
          value={personNumber}
          name="personNumber"
          onChange={handleChange}
          ref={personRef}
        />
        <Img src={iconPerson} alt="person" />
      </Container>
    </div>
  );
};

export default TipForm;
