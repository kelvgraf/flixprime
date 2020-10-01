import React, { Component } from 'react';
import styled from "styled-components"

import amoung from "../assets/amongus.jpg";

const Container = styled.div`
  width: 20%;
  height: 30%;
  padding: 1rem;
  box-shadow: 1px 2px 8px #00000075;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
  color: #f4f4f4;
`;

const Description = styled.p`
  color: #f4f4f4;
`;

const DuartioDate = styled.p`
color: #f4f4f475;
`;

const Classification = styled.p`
  color: #6495ED99;
`;


class Home extends Component {
  state = {
    movies: [
      {
        name: "Amoung US",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        date: "09/2020",
        class: "16",
      }
    ]
  }

  render() {
    return (
      <>
      {
        this.state.movies.map((item, index) => (
          <Container>
            <Img src={amoung} />
            <Title>{item.name}</Title>
            <Description>{item.description}</Description>
            <DuartioDate>{item.date}</DuartioDate>
            <Classification>{item.class}</Classification>
          </Container>

        ))
      }
      </>
    )
  }
}

export default Home;
