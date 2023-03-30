import React from "react";
import styled from "styled-components";

import line from '../../assets/svgs/lineSec2.svg';
import carIconLine from '../../assets/icon/myLocation2.png';
import carWallpaper from '../../assets/img/carWallpaper.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { BlurNode } from "three-stdlib";

AOS.init();

const Block2 = styled.div`
    background-color: black;
    height: 100vh;
`;

const Line = styled.div`
    width: 50%;
`;

function Section2(props) {
    return (
        <Block2 className="">
            <div data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-duration="1000">
                <div className="cardImg">
                    <div className="browser absolute shadow-lg a">
                        <img className="carImgSec2" src={carWallpaper} alt="CarWallpaper" />
                    </div>
                </div>
            </div>
            <Line>
                <img className="lineSec2" src={line} alt="Line" />
                <div data-aos="fade-right" data-aos-anchor-placement="center-center" data-aos-delay="650">
                    <h2 className="textSection2-1">Do not think twice, rent with us!</h2>
                    <h4 className="textSection2-2">On our vehicle parking space rental website, we offer you a service that is 100% recommended by our satisfied customers. With us, you will find a safe, accessible and comfortable place to park your car.</h4>

                </div>
                <img className="carIconLineSec2" src={carIconLine} alt="CarIconLine" />
            </Line>
        </Block2>
    );
}

export default Section2;
