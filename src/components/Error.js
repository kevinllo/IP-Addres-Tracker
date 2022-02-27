import React from "react";
import styled from "styled-components";

const Error = ({ error }) => {
  return (
    <Container>
      <ErrorStatus>{error}</ErrorStatus>
    </Container>
  );
};

export default Error;

const ErrorStatus = styled.p`
  text-align: center;
  color: #4F4F4F;
  font-size: 1.2rem;
  font-weight: 700;
`;
const Container = styled.div`
  height: 100px;
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: white;
`;
