import React from "react";
import styled from "styled-components";

function ContainerData() {
  return (
    <Container>
      <Card>
        <span>IP ADDRRES</span>
        <p>192.212.174.101</p>
      </Card>

      <Card>
        <span>LOCATION</span>
        <p>
          Brooklyn, NY <br />
          10001
        </p>
      </Card>
      <Card>
        <span>TIMEZONE</span>
        <p>UTC-05:00</p>
      </Card>
      <Card>
        <span>ISP</span>
        <p>Space X</p>
      </Card>
    </Container>
  );
}

export default ContainerData;
const Container = styled.div`
/*   outline: 1px solid black; */
  position: absolute;
  bottom: -30%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 18px 18px 30px 18px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: white;
`;
const Card = styled.div`
  border-left: 1px solid #bfbfbf;
  padding: 0px 15px;
  &:first-child {
    border-left: 0;
  }
  & span {
    font-size: 13px;
    font-weight: 500;
    color: #949492;
    letter-spacing: 1.3px;
  }
  & p {
    font-size: 18px;
    font-weight: 600;
  }
`;
