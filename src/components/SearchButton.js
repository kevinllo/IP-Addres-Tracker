import React, { useState } from "react";
import styled from "styled-components";

function SearchButton({ setInput }) {
  const [ip, setIp] = useState("");
  const handleChange = (e) => {
    setIp(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (ip.trim().length > 0) {
      setInput(ip);
    }
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <input
            type="search"
            placeholder="Search for any API Address or domain"
            onChange={handleChange}
            value={ip}
          />
        </InputContainer>
        <IconContainer>
          <span>
            <img src="/images/icon-search.svg" alt="icon search" />
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
  height: 50px;
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
    ::placeholder {
      font-size: 15px;
    }
    border: none;
    width: 100%;
    height: 100%;
    @media (min-width: 575px) {
      ::placeholder {
        font-size: 17px;
      }
    }
    &:focus {
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
    cursor: pointer;
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
