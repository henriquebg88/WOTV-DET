import React from 'react';

import img_equip from '../../../assets/sages_hat.png';

const Card_EquipsAndSkills = () => {
    return(
        <div className="card">
            <div className="field equip">
                <h1>Equip</h1>
                <img src={img_equip}/>
            </div>
            <div className="field skills">
                <h1>Skills</h1>
            </div>
        </div>
    )
};

export default Card_EquipsAndSkills;