import React from "react";
import styled from "styled-components";

import imgApp1 from '../../assets/img/app1.jpg';

const Block1 = styled.div`
  
`;


function Section1(props) {
    return (
        <Block1 className="">
            <div className="blockSection1">
                <div className="front iphone light">
                    <div className="screen">
                        <img className="c imgApp1" src={imgApp1} alt="imgApp1"></img>
                    </div>
                </div>
            </div>
        </Block1>
    );
}

export default Section1;
