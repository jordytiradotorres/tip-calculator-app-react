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

const TipResult = ({
  dollarValue,
  personNumber,
  setDollarValue,
  percentageValue,
  percentageCustomValue,
  setPercentageCustomValue,
  setPercentageValue,
}) => {
  dollarValue = Number(dollarValue);
  personNumber = Number(personNumber);

  const tipAmount = () => {
    if (personNumber === 0) {
      return "0.00";
    }
    if (percentageCustomValue !== "Custom" && percentageCustomValue <= 9) {
      return (
        (dollarValue * `0.0${percentageCustomValue}`) /
        personNumber
      ).toFixed(2);
    } else {
      if (percentageValue <= 9) {
        return ((dollarValue * `0.0${percentageValue}`) / personNumber).toFixed(
          2
        );
      } else {
        return ((dollarValue * `0.${percentageValue}`) / personNumber).toFixed(
          2
        );
      }
    }
  };

  const totalPerson = () => {
    if (percentageCustomValue !== "Custom") {
      if (percentageCustomValue <= 9) {
        return (dollarValue * `0.0${percentageCustomValue}`).toFixed(2);
      } else {
        return (dollarValue * `0.${percentageCustomValue}`).toFixed(2);
      }
    } else {
      if (percentageValue <= 9) {
        return (dollarValue * `0.0${percentageValue}`).toFixed(2);
      } else {
        return (dollarValue * `0.${percentageValue}`).toFixed(2);
      }
    }
  };

  const handleReset = () => {
    setDollarValue({
      dollarValue: 0,
      personNumber: 0,
    });
    setPercentageCustomValue("Custom");
    setPercentageValue(0);
  };

  return (
    <Wrapper>
      <AmountTip>
        <H3>
          Tip Amount <span>/ person</span>
        </H3>

        <Result>${isNaN(tipAmount()) ? "0.00" : tipAmount()}</Result>
      </AmountTip>

      <AmountTip>
        <H3>
          Total <span>/ person</span>
        </H3>

        <Result>${isNaN(totalPerson()) ? "0.00" : totalPerson()}</Result>
      </AmountTip>

      <Button reset large onClick={handleReset} disabled={dollarValue === 0}>
        Reset
      </Button>
    </Wrapper>
  );
};

export default TipResult;
