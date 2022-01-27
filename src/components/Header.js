import React from "react";
import styled from "styled-components";
import SearchButton from "./SearchButton";
import ContainerData from "./ContainerData";


function Header() {
  return (
    <Container>
      <Title>IP Address Tracker</Title>
      <SearchButton />
      <ContainerData />
    </Container>
  );
}

export default Header;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  padding: 20px;
  outline: 1px solid black;
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
  color: white;
  font-weight: 500;
  letter-spacing: 1.2px;
  @media (max-width: 375px) {
   font-size: 25px;
  }
`;
