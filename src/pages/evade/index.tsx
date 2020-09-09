import React, { useEffect, useState } from "react";
import axios from 'axios';

import Card_Char from './components/Card_Char';
import Card_EquipsAndSkills from './components/Card_EquipsAndSkills';
import CardStatus from './components/Card_Status';

import './styles.css';
import './components/card.css';

interface unitDatabase {
    items: [{
        iname: string,
        charaId: string,
        rare: number,
        elem: number[],
        jobsets: string[],
        status:[
            {},
            {
                hp: number,
                dex: number,
                atk: number,
                def: number,
                mag: number,
                spd: number,
                mov: number,
                jmp: number,
                luk: number,
                ap: number
            }
        ]

    }];
}

const Evade = () => {

    useEffect( () => {
        axios.get<unitDatabase>('https://raw.githubusercontent.com/shalzuth/wotv-ffbe-dump/master/data/Unit.json').then( response => {
            console.log(response.data.items.find( char => char.charaId == 'LAPSmont' ));
            //https://github.com/shalzuth/wotv-ffbe-dump/blob/master/en/UnitName.json
            //https://github.com/shalzuth/wotv-ffbe-dump/blob/master/en/JobName.json
        })
    }, [] )

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