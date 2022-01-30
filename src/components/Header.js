import React, { useState } from "react";
import styled from "styled-components";
import SearchButton from "./SearchButton";
import ContainerData from "./ContainerData";

function Header() {
  const [input, setInput] = useState(null);
  return (
    <Container>
      <Title>IP Address Tracker</Title>
      <SearchButton setInput={setInput} />
      <ContainerData input={input} />
    </Container>
  );
}
export default Header;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  padding: 20px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("/images/pattern-bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
  }
`;
const Title = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  color: white;
  font-weight: 500;
  letter-spacing: 1.2px;

  @media (min-width: 575px) {
    font-size: 2rem;
  }
`;
