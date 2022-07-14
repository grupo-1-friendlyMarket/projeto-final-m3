import CityFilter from "../../components/CityFilter";
import { Header } from "../../components/Header";
import { Container } from "./styled";
import * as React from "react";
import { Presentation } from "../../components/Presentation";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Presentation />
        <CityFilter />
      </Container>
    </>
  );
};

export default Home;
