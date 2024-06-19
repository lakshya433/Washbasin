import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Vector from '../assets/img/Vector.png';
import BannerImg from '../assets/img/banner-img.png';
import BannerSubImg from '../assets/img/banner-sub-img.png'

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container fluid>
                <Row className="align-items-center no-gutters">
                    <Col xs={12} md={6} xl={7} className="banner-txt">
                        <pre id='banner-header'><h1>FROM<br/>QUARRY<br/>TO BATHROOM</h1></pre>
                        <p>Transform your bathroom into a luxurious retreat with our stunning washbasins. Elevate your space with modern designs and create a captivating look.</p>
                        <img src={BannerSubImg} alt='Benifits' id='BannerSubImg'/>
                    </Col>
                    <Col xs={12} md={6} xl={5} className='banner-image'>
                        <img src={BannerImg} alt="banner-image" />
                        <button id="scroll-button" onClick={() => document.getElementById('target-section').scrollIntoView({ behavior: 'smooth' })}>
                            Scroll Down <img src={Vector} alt="Vector Icon" id='scroll-img'/>
                        </button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
