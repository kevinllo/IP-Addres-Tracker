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
        <InputContainer>
          <input
            type="search"
            placeholder="Search por any API Address or domain"
          />
        </InputContainer>
        <IconContainer>
          <span>
            <img src="/images/icon-search.svg" />
          </span>
        </IconContainer>
      </Form>
    </Container>
  );
}

export default SearchButton;
const Container = styled.div`
  margin: 20px 0;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  width: 100%;
  max-width: 600px;
  background-color: white;
  border-radius: 10px;
`;

const InputContainer = styled.div`
  flex: 1;
  padding: 0 15px;
  input {
    border: none;
    width: 100%;
    height: 100%;
    &:focus{
      outline: none;
    }
  }
`;
const IconContainer = styled.div`
  background: black;
  padding: 0 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  span {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    img {
      height: 20px;
      width: 20px;
    }
  }
`;
