import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.section`
  background-color: hsl(183, 100%, 15%);
  padding: 2rem;
  border-radius: 0.5rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
    padding: 1rem;
  }
`;

const AmountTip = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
    width: 350px;
  }
`;

const H3 = styled.h3`
  display: flex;
  flex-wrap: wrap;
  width: 120px;
  font-size: 1.1rem;
  color: hsl(0, 0%, 100%);

  span {
    font-weight: 400;
    color: hsl(184, 14%, 56%);
    font-size: 1rem;
  }
`;

const Result = styled.output`
  font-size: 2rem;
  font-weight: 700;
  color: hsl(172, 67%, 45%);

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const TipResult = () => {
  return (
    <Wrapper>
      <AmountTip>
        <H3>
          Tip Amount <span>/ person</span>
        </H3>

        <Result>$0.00</Result>
      </AmountTip>

      <AmountTip>
        <H3>
          Total <span>/ person</span>
        </H3>

        <Result>$0.00</Result>
      </AmountTip>

      <Button reset large>
        Reset
      </Button>
    </Wrapper>
  );
};

export default TipResult;
