import React from "react";
import styled from "styled-components";

import imgFoot1 from '../../assets/img/logoMaps.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const BlockFooter = styled.div`
`;

function Footer(props) {
    return (
        <BlockFooter className="footer1">
            <div className="container">
                <footer className="blockFooter">
                    <div className="item1Footer">
                        <a href="/" className="text1Footer">
                            <img className="imgFoot1" src={imgFoot1} alt="Icon" />
                        </a>
                        <span className="textFooter text-muted">© 2023 Parkingmode. </span>
                        <p className="pFoot">All Rights Reserved</p>
                    </div>

                    <ul className="iconsFooter">
                        <li><a className="aFooter" href="https://www.linkedin.com/in/nbpustelnik/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                        <li><a className="aFooter" href="https://twitter.com/n_pustelnyk" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a></li>
                        <li><a className="aFooter" href="https://github.com/nicolaievpustelnik" target="_blank"><ion-icon name="logo-github"></ion-icon></a></li>
                    </ul>
                </footer>
            </div>
        </BlockFooter>
    );
}

export default Footer;