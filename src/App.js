import { useState } from "react";
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
  justify-content: center;
  margin: 3rem auto;
  font-size: 1.5rem;
`;

const ContainerTip = styled.div`
  background: hsl(0, 0%, 100%);
  padding: 1rem;
  border-radius: 1rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
    padding: 2rem;
  }
`;

const App = () => {
  const [inputValue, setDollarValue] = useState({
    dollarValue: 0,
    personNumber: 0,
  });

  const [percentageValue, setPercentageValue] = useState(0);
  const [percentageCustomValue, setPercentageCustomValue] = useState("Custom");

  const handleChange = (e) => {
    setDollarValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickValue = (e) => {
    setPercentageValue(parseInt(e.target.textContent.slice(0, -1)));
    setPercentageCustomValue("Custom");

    let parent = e.target.parentElement.children;
    for (let i = 0; i < parent.length; i++) {
      parent[i].style.backgroundColor = "hsl(183,100%,15%)";
      parent[parent.length - 1].style.backgroundColor = "hsl(189,41%,97%)";
      parent[parent.length - 1].style.border = "thin solid transparent";
    }
    e.target.style.backgroundColor = "hsl(172,67%,45%)";
  };

  const handleChangeCustom = (e) => {
    setPercentageCustomValue(e.target.value.trim());
  };

  const handleFocusCustom = (e) => {
    e.target.style.border = "thin solid hsl(172,67%,45%)";
  };

  return (
    <div>
      <Title>
        spli<span>tter</span>
      </Title>

      <ContainerTip>
        <TipForm
          {...inputValue}
          handleChange={handleChange}
          handleClickValue={handleClickValue}
          handleChangeCustom={handleChangeCustom}
          handleFocusCustom={handleFocusCustom}
          percentageCustomValue={percentageCustomValue}
        />
        <TipResult
          {...inputValue}
          setDollarValue={setDollarValue}
          percentageValue={percentageValue}
          percentageCustomValue={percentageCustomValue}
        />
      </ContainerTip>
    </div>
  );
};

export default App;
