import React from "react";
import styled from "styled-components";

import carWallpaper from '../../assets/img/carWallpaper.png';

const Block2 = styled.div`
    background-color: black;
    height: 100vh;
`;

function Section2(props) {
    return (
        <Block2 className="">
            <div className="cardImg">
                <div className="browser absolute shadow-lg a">
                    <img className="carImgSec2" src={carWallpaper} alt="CarWallpaper" />
                </div>
            </div>
        </Block2>
    );
}

export default Section2;
