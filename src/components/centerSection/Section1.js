import React from "react";
import styled from "styled-components";

import imgApp1 from '../../assets/img/app1.jpg';
import imgApp2 from '../../assets/img/app2.jpg';
import lineSvg from '../../assets/svgs/line2.svg';
import carIconLine from '../../assets/icon/myLocation2.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 800
});

const Block1 = styled.div`
    background-color: black;
`;

const Line2 = styled.div`
    width: 100px;
    margin-left: 90%;
    margin-top: -120vh;
`;

const TextSection1 = styled.div`
    width: 900px;
    height: 300px;
    margin-left: 800px;
    margin-top: -450px;
`;

function Section1(props) {
    return (
        <Block1 className="block1Sec1">
            <div className="blockSection1">
                <div className="front iphone light">
                    <div className="screen">
                        <img className="c imgApp1" src={imgApp1} alt="imgApp1"></img>
                    </div>
                </div>
            </div>
            <div className="blockSection2">
                <div className="front2 iphone2 light2">
                    <div className="screen">
                        <img className="c imgApp2" src={imgApp2} alt="imgApp2"></img>
                    </div>
                </div>
            </div>

            <Line2>
                <img className="" src={lineSvg} alt="Line" />
            </Line2>
            <div>
                <img className="carIconLine" src={carIconLine} alt="CarIconLine" />
            </div>
            <TextSection1>
                <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <h2 className="textSection1">
                        Find the perfect place to park your vehicle in our app. We offer a wide variety of parking spaces available for rent, regardless of the type of vehicle you have.
                    </h2>
                </div>
            </TextSection1>


        </Block1>
    );
}

export default Section1;
