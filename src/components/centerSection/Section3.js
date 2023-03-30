import React from "react";
import styled from "styled-components";

import imgSec3 from '../../assets/img/logoMaps.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Block3 = styled.div`
    background-color: #151414f5;
    border-top-left-radius: 60% 160px !important;
    border-top-right-radius: 60% 160px !important;
    position: relative;
    height: 63vh;
    width: 100%;
    margin-top: -50px;
`;

function Section3(props) {
    return (
        <Block3 className="">
            <div className="blockText3">
                <h2 className="textSection3-1">The place for anyone from anywhere to park their vehicle</h2>
                <p className="textSection3-2">Join our platform and enjoy the convenience of quickly finding a parking space, without having to worry about wasting time looking for an available space. Let's build together a stress-free parking experience and improve the mobility of our city.</p>
                <img className="imgSec3" src={imgSec3} alt="Icon" />
            </div>
        </Block3>
    );
}

export default Section3;