import React from "react";

import './styles.css'

const Evade = () => {
  return (
    <div id="page-evade">
      <div className="content">

        <ul>
          
          <li className="unit-card">

            <div className="field-group">

              <div className="field character">
                <img className='unit-img' src="https://wotv-calc.com/assets/units/lapssdlx.png" alt="" />
                <h2>Evasion: <strong>160</strong></h2>
              </div>
              <div className="field">
                <h1>Shadowlynx</h1>

                <div className="field equip">
                  <img src="https://wotv-calc.com/assets/equipments/lapswpn_hat_004.png" alt="" />
                  <span>+5</span>
                </div>
                <div className="field skills">

                  <div className="skill">
                    <img className='subjob' src="https://wotv-calc.com/assets/jobs/sam.png" alt="" />
                    <p>Illusion</p>
                  </div>
                  <div className="skill">
                    <img className='support-skill' src="https://wotv-calc.com/assets/skill-type/support.png" alt="" />
                    <p>Shadow Runner</p>
                  </div>
                </div>

                

              </div>

            </div>

          </li>

        </ul>

      </div>
    </div>
  )
}

export default Evade;