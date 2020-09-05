import React from 'react';

import img_equip from '../../../assets/sages_hat.png';
import img_support from '../../../assets/support.png';

const Card_EquipsAndSkills = () => {
    return (
        <div className="card">
            <div className="field equip">
                <h1>Equip</h1>
                <img src={img_equip} />
            </div>
            <div className="field skills">
                <h1>Skills</h1>
                <div className="field">
                    <div className="field-inline">
                        <img src={img_support} />
                    </div>
                    <div className="field-inline">
                        <legend>Shadow Runner</legend>
                        <p>AGI + 12%</p>
                        <p>LUCK + 12%</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card_EquipsAndSkills;