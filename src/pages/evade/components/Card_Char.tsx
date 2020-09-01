import React from 'react';

import char_fullBody from '../../../assets/shadowlynxs_fullbody.png'

import './card.css'

const Card_Char = () => {
    return (
        <div className="card">
            <header>
                <h1>Shadowlynxs</h1>
            </header>
            <main>
                <img className='char_fullBody' src='https://wotv-calc.com/assets/units/lapssdlx.png' alt=""/>
            </main>
            <footer>
                <h1>Evasion: <strong>188</strong></h1> 
            </footer>
        </div>
    )
};

export default Card_Char;