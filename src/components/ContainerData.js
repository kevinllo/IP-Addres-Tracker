import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import MapContext from "../context/mapContext";
import styled from "styled-components";

function ContainerData({ input }) {
  const mapContext = useContext(MapContext);
  const [data, setData] = useState({
    ip: "8.8.8.8",
    location: {
      country: "US",
      region: "California",
      city: "Mountain View",
      postalCode: "94035",
      timezone: "-08:00",
      geonameId: 5375480,
    },
    isp: "Google LLC",
  });

  useEffect(() => {
    const getData = () => {
      const response = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_jqNYGvc9LqaGL9WTHR9dWhMLwDf8k&ipAddress=${
          input ? input : "8.8.8.8"
        }`
      );
      console.log(response.data);
      console.log(response.status);
      setData(response.data);
      mapContext.setCoordinates({
        lat: response.data.location.lat,
        lng: response.data.location.lng,
      });
    };
    getData();
  }, [input]);

  return (
    <Main>
      <Container>
        <Card>
          <span>IP ADDRRES</span>
          <p>{data.ip}</p>
        </Card>

        <Card>
          <span>LOCATION</span>
          <p>{`${data.location.city} , ${data.location.country}`}</p>
        </Card>
        <Card>
          <span>TIMEZONE</span>
          <p>{`UTC${data.location.timezone}`}</p>
        </Card>
        <Card>
          <span>ISP</span>
          <p>{`${data.isp}`}</p>
        </Card>
      </Container>
    </Main>
  );
}

export default ContainerData;
const Main = styled.main`
  position: relative;
  margin: 0 auto;
  max-width: 1000px;
`;
const Container = styled.div`
  max-height: 300px;
  position: absolute;
  top: 5px;
  left: 0;
  right: 0;
  padding: 15px 0;
  display: grid;
  grid-template-rows: repeat(4, minmax(0, 1fr));
  grid-gap: 1rem;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
  background-color: white;

  @media (min-width: 575px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    top: 30px;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    top: 40px;
    padding-bottom: 40px;
  }
  span {
    font-size: 11px;
    letter-spacing: 1.5px;
    font-weight: 600;
    color: grey;
    @media (min-width: 1024px) {
      font-size: 12px;
    }
  }
  p {
    font-size: 1.2rem;
    font-weight: 600;
    color: #4f4f4f;
    @media (min-width: 1024px) {
      font-size: 1.5rem;
    }
  }
`;
const Card = styled.div`
  padding: 0 8px;
  height: 100%;
  max-height: 100px;
  overflow-y: scroll;
  overflow-x: hidden;
  @media (min-width: 767px) {
    overflow: hidden;
  }
`;
