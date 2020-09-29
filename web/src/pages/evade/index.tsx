import React, { useEffect, useState } from "react";
import axios from 'axios';

import Card_Char from './components/Card_Char';
import Card_EquipsAndSkills from './components/Card_EquipsAndSkills';
import CardStatus from './components/Card_Status';

import './styles.css';
import './components/card.css';

interface unitDatamine {
    iname: string,
    hero: number,
    sex: number,
    size: number,
    body_type: string,
    personal: number,
    charaId: string,
    anm_type: number,
    voiceId: string,
    type: number,
    elem: number[],
    species: number[],
    birth: number,
    rare: number,
    grow: string,
    cost: number,
    piece: string,
    piece_num: number,
    db_num: number,
    trust: string,
    atkskl: string,
    mstskl: string[],
    jobsets: string[],
    ai: string,
    buff_pri: string,
    debuff_pri: string,
    status: [
        {
            hp: number,
            mp: number,
            ap: number,
            atk: number,
            def: number,
            mag: number,
            mnd: number,
            dex: number,
            spd: number,
            luk: number,
            ewi: number,
            eth: number,
            asl: number,
            api: number,
            abl: number,
            ash: number,
            ama: number,
            cpo: number,
            csl: number,
            cpa: number,
            ccf: number,
            cch: number,
            mov: number,
            jmp: number,
            dmax: number
        },
        {
            hp: number,
            mp: number,
            ap: number,
            atk: number,
            def: number,
            mag: number,
            mnd: number,
            dex: number,
            spd: number,
            luk: number,
            ewi: number,
            eth: number,
            asl: number,
            api: number,
            abl: number,
            ash: number,
            ama: number,
            cpo: number,
            csl: number,
            cpa: number,
            ccf: number,
            cch: number,
            mov: number,
            jmp: number,
            dmax: number
        }
    ],
    limit: string,
    awake_tbl_id: string
}
interface unitDatamineArray{
    items: unitDatamine[]
}


const Evade = () => {

    const [wotvUnits, set_wotvUnits] = useState<unitDatamine[]>([]);

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


        const teste = axios.get<unitDatamineArray>('https://raw.githubusercontent.com/shalzuth/wotv-ffbe-dump/master/data/Unit.json').then( response => {
  
            return await response.data.items;
        })
        set_wotvUnits(teste);

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