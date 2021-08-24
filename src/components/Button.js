import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) =>
    props.reset ? "hsl(172, 67%, 45%)" : "hsl(183, 100%, 15%)"};
  border: none;
  border-radius: 0.2rem;
  text-align: center;
  padding: 0.5rem 0;
  font-weight: 700;
  font-size: 1.1rem;
  color: ${(props) =>
    props.reset ? "hsl(183, 100%, 15%)" : "hsl(0, 0%, 100%)"};
  font-family: "Space mono";
  text-transform: ${(props) => (props.reset ? "uppercase" : "capitalize")};
  width: ${(props) => (props.large ? "100%" : "auto")};
  margin-top: ${(props) => (props.reset ? "3rem" : "0px")};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.reset ? "hsl(185, 41%, 84%)" : "hsl(172, 67%, 45%)"};
    color: hsl(183, 100%, 15%);
  }

  &:disabled {
    opacity: 0.2;
  }
`;

export default Button;
