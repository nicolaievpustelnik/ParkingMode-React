import React from "react";
import styled from "styled-components";

import imgSec3 from '../../assets/img/logoMaps.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Block3 = styled.div`
    background-color: #151414f5;
    border-top-left-radius: 50% 160px !important;
    border-top-right-radius: 50% 160px !important;
    position: relative;
    height: 70vh;
    width: 100%;
    margin-top: -50px;
`;

function Section3(props) {
    return (
        <Block3 className="">
            <div className="blockText3">
                <h2 className="textSection3-1">The place for anyone from anywhere to build anything</h2>
                <p className="textSection3-2">Whether you’re scaling your startup or just learning how to code, GitHub is your home. Join the world’s largest developer platform to build the innovations that empower humanity. Let’s build from here.</p>
                <img className="imgSec3" src={imgSec3} alt="Icon" />
            </div>
        </Block3>
    );
}

export default Section3;