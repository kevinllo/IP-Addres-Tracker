import React from "react";
import styled from "styled-components";

function SearchButton() {
  const getInput = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
  };
  return (
    <Container>
      <Form onSubmit={getInput}>
        <input
          type="search"
          placeholder="Search por any API Address or domain"
        />
        <input type="submit" value="" />
      </Form>
    </Container>
  );
}

export default SearchButton;

const Container = styled.div`
  /* outline: 1px solid black; */
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;
const Form = styled.form`
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
