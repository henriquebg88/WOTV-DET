import React, { useEffect, useState } from "react";
import axios from 'axios';

import Card_Char from './components/Card_Char';
import Card_EquipsAndSkills from './components/Card_EquipsAndSkills';
import CardStatus from './components/Card_Status';

import './styles.css';
import './components/card.css';
import { Console } from "console";

interface unitDatabase {
    items: [{
        iname: string,
        charaId: string,
        rare: number,
        type: number,
        elem: number[],
        jobsets: string[],
        piece: string,
        status: [
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
interface unitName {
    infos:
    [
        {
            key: string,
            value: string
        }
    ]
}
interface unitNameData {
    key: string,
    value: string
}
interface units {
    items: []
}

const Evade = () => {

    useEffect(() => {
        // https://raw.githubusercontent.com/shalzuth/wotv-ffbe-dump/master/data/Unit.json
        // https://raw.githubusercontent.com/shalzuth/wotv-ffbe-dump/master/en/UnitName.json
        // https://raw.githubusercontent.com/shalzuth/wotv-ffbe-dump/master/en/JobName.json

        // NOME DAS UNIDADES POR CHAVE
        // axios.get<unitName>('https://raw.githubusercontent.com/shalzuth/wotv-ffbe-dump/master/en/UnitName.json').then( response => {
        //     console.log(response.data.infos.map( data => {
        //         console.log(data);
        //     }));
        // })


        axios.get<unitDatabase>('https://raw.githubusercontent.com/shalzuth/wotv-ffbe-dump/master/data/Unit.json').then(response => {

            const units: object[] = [];
            const teste: any[] = [1, 2, 3, 5, 3, 56, 435];

            //Get unit name using KEY                
            response.data.items.map( item => {
                //type 0 seems to refer to playable units
                if (item.piece) {

                    axios.get<unitName>('https://raw.githubusercontent.com/shalzuth/wotv-ffbe-dump/master/en/UnitName.json').then( response => {
                        //Push esta indo depois de o array ser contabilizado??
                        //Push esta indo depois de o array ser contabilizado??
                        //Push esta indo depois de o array ser contabilizado??
                        //Push esta indo depois de o array ser contabilizado??
                        //Push esta indo depois de o array ser contabilizado??
                        teste.push(1);
                    })




                }

            });

            console.log(units);
            console.log(units.length)

            units.map(() => {
                console.log("oi");
            })

            console.log(teste);
            teste.map(numero => {
                console.log(numero)
            })


        })

    }, [])

    return (
        <div id="page-evade">
            <main>
                <h1>Página de teste</h1>
                <div className="container">
                    <Card_Char />
                    <Card_EquipsAndSkills />
                    <CardStatus />
                </div>
            </main>
        </div>
    )
}

export default Evade;