import React from 'react';
import Logo from '../../images/card-logo.svg';
import './Cards.css'

const TwoCards = () => (
    <div>
        <div className='cardBack'><span className='cardBackNumber'>000</span></div>
        <div className='cardFront'>

            <div className='circleContainer'>

                <img src={Logo}></img>

            </div>

            <div className='cardNumberContainer'>
            0000 0000 0000 0000
            </div>

            <div className='cardDetailsContainer'>

                <span className='frontCardName'>Jane appleseed</span>

                <span className='frontExpiry'>00/00</span>

            </div>

        </div>
    </div>
);
export default TwoCards;
