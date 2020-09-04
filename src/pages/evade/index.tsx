import React from "react";

import Card_Char from './components/Card_Char';
import Card_EquipsAndSkills from './components/Card_EquipsAndSkills';
import CardStatus from './components/Card_Status';

import './styles.css';
import './components/card.css';

const Evade = () => {
    return (
        <div id="page-evade">
            <main>
                <h1>Página de teste</h1>
                <div className="container">
                    <Card_Char/>
                    <Card_EquipsAndSkills/>
                    <CardStatus/>
                </div>
            </main>
        </div>
    )
}

export default Evade;