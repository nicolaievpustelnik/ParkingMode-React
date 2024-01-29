import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from '../Earth';

import imgCarHeader from '../../assets/img/car2.gif';
import lineSvg from '../../assets/svgs/line_animated.svg';
import bikeIcon from '../../assets/icon/bike2.png';
import carIcon from '../../assets/icon/car2.png';
import hourIcon from '../../assets/icon/hour2.png';
import motorcycleIcon from '../../assets/icon/motorcycle2.png';
import rentalIcon from '../../assets/icon/rental2.png';
import truckIcon from '../../assets/icon/truck2.png';
import line from '../../assets/icon/nextWhite.png';

const Container = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 1500px) {
    width: 105%;
  }
`;

const CanvasContainer = styled.div`
  width: 160%;
  height: 100%;
  float: left;
  margin-top: -100px;
  margin-left: -1200px;
  @media (max-width: 1500px) {
    margin-left: -700px;
    margin-top: -60px;
    width: 140%;
    height: 80%;
  }
`;

const TextContainer = styled.div`
  width: 70%;
  height: 8vh;
  float: left;
  @media (max-width: 1500px) {
    margin-top: 50px;
  }
`;

const ImgHeader = styled.div`
  margin-top: 490px;
  margin-left: -80%;
  float: left;
  user-select: none;
  @media (max-width: 1500px) {
    margin-top: 230px;
    margin-left: -68%;
  }
`;

const BlockTextHeader = styled.div`
  width: 58%;
  height: 20px;
  margin-left: 72%;
  float: left;
`;

const LineCarHeader = styled.div`
  width: 700px;
  margin-left: 500px;
  @media (max-width: 1500px) {
    width: 400px;
    margin-left: 400px;
  }
`;

const InputHeader = styled.div`
  width: 500px;
  float: left;
  margin-top: -450px;
  margin-left: -165px;
  @media (max-width: 1500px) {
    width: 400px;
    margin-top: -268px;
    margin-left: -220px;
  }
`;

const CardBlock = styled.div`
  float: left;
  margin-top: -320px;
  margin-left: -280px;
  @media (max-width: 1500px) {
    margin-top: -200px;
    margin-left: -280px;
  }
`;

function Header(props) {
  return (
    <Container className="container">

      <CanvasContainer>
        <Canvas>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>
      </CanvasContainer>

      <ImgHeader>
        <img className="imgCar" src={imgCarHeader} alt="Car" />
      </ImgHeader>

      <LineCarHeader>
        <img className="lineSvgCar" src={lineSvg} alt="Line" />
      </LineCarHeader>

      <TextContainer>
        <div className="TextHeader">
          <h1 className="h1Header">
            Parking Mode
          </h1>

          <BlockTextHeader>
            <p className="blockText">
              ParkingMode is an urban mobility application that allows you to search or recommend parking for all types of vehicles, as well as you can make reservations or compare prices for your ideal parking lot.
            </p>
          </BlockTextHeader>
        </div>
      </TextContainer>

      <InputHeader>
        <form>
          <input className="inputEmail" type="text" name="Email" placeholder="Email Address" />
          <button className="inputSignUp" type="button">Sign Up for ParkingMode</button>
        </form>
      </InputHeader>

      <CardBlock className="cardHeader">
        <div className="c card">
          <p className="textCardHeader">Are you tired of going around endlessly looking for a place to park your vehicle? Are you frustrated when you are late for your appointments because you couldn't find a parking space?</p>
          <h2 className="textCardHeader">You don't have to worry anymore!</h2>
          <h3 className="textCardHeader">Parking type:</h3>
          <div className="c type">
            <img className="c iconCard" src={bikeIcon} alt="bike"></img>
            <p className="c textIconCard">Bike</p>
          </div>

          <div className="c type">
            <img className="c iconCard" src={carIcon} alt="bike"></img>
            <p className="c textIconCard">Car</p>
          </div>

          <div className="c type">
            <img className="c iconCard2" src={hourIcon} alt="bike"></img>
            <p className="c textIconCard">Hour</p>
          </div>

          <div className="c type">
            <img className="c iconCard" src={motorcycleIcon} alt="bike"></img>
            <p className="c textIconCard">Motorcycle</p>
          </div>

          <div className="c type">
            <img className="c iconCard" src={rentalIcon} alt="bike"></img>
            <p className="c textIconCard">Rental</p>
          </div>

          <div className="c type">
            <img className="c iconCard" src={truckIcon} alt="bike"></img>
            <p className="c textIconCard">Truck</p>
          </div>

          <div><button className="installButton" type="button"><img className="lineButton" src={line} alt="Line" /></button></div>

        </div>
        <div className="c colorCard"></div>
      </CardBlock>

    </Container>
  );
}

export default Header;
