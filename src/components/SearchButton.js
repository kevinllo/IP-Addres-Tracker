import React from "react";
import styled from "styled-components";

function SearchButton() {
  return (
    <Container>
      <Buttons>
        <input type="search" />
        <input type="submit" value="" />
      </Buttons>
    </Container>
  );
}

export default SearchButton;

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Buttons = styled.div`
  display: flex;
  width: 600px;
  height: 50px;
  & input {
    height: 100%;
    border: none;
  }
  & input[type="search"] {
    flex: 1;
    border-radius: 12px 0px 0px 12px;
    padding: 0px 25px;
    font-size: 18px;
    &:focus {
      outline: none;
    }
  }
  & input[type="submit"] {
    padding: 0px 25px;
    border-radius: 0px 12px 12px 0px;
    background-color: #303030;
    color: white;
    cursor: pointer;
    background-image: url("/images/icon-arrow.svg");
    background-size: 20%;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 250ms;
    &:hover {
      background-color: #444343;
    }
  }
`;
