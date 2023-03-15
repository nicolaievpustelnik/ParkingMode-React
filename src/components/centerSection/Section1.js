import React from "react";
import styled from "styled-components";

import imgApp1 from '../../assets/img/app1.jpg';
import imgApp2 from '../../assets/img/app2.jpg';

const Block1 = styled.div`
    
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
        </Block1>
    );
}

export default Section1;
