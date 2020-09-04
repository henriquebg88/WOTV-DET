import React from 'react';

import img_char_fullBody from '../../../assets/shadowlynx_fullbody.png'


const Card_Char = () => {
    return (
        <div className="card char">
            <div>
                <h1>Shadowlynxs</h1>
            </div>
            <div>
                <img src={img_char_fullBody} alt=""/>
            </div>
            <div>
                <h1>Evasion: <strong>188</strong></h1> 
            </div>
        </div>
    )
};

export default Card_Char;