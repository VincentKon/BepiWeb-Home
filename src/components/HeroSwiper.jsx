/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import '../styles/HeroSwiper.css';

const HeroSwiper = ({ images, duration }) => {
    return (
        <div className='aboutContainer'>
            <div className="slider-wrapper">
                <div className="slider">
                    <img src="assets/img/bg.jpg" alt="" id='slide-1' />
                    <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" id='slide-2' />
                    <img src="https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" id='slide-3' />
                </div>
                <div className="slider-nav">
                    <a href="#slide-1"></a>
                    <a href="#slide-2"></a>
                    <a href="#slide-3"></a>
                </div>
            </div>
        </div>
    );
};

export default HeroSwiper;
