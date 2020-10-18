import React, { useEffect, useState } from "react";
import axios from 'axios';

import Card_Char from './components/Card_Char';
import Card_EquipsAndSkills from './components/Card_EquipsAndSkills';
import CardStatus from './components/Card_Status';

import './styles.css';
import './components/card.css';

interface unitName {
    key: string,
    value: string
}
interface unitNameArray {
    infos: unitName[]
}

interface unitData {
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
interface unitDataArray {
    items: unitData[]
}

// https://raw.githubusercontent.com/shalzuth/wotv-ffbe-dump/master/data/Unit.json
// https://raw.githubusercontent.com/shalzuth/wotv-ffbe-dump/master/en/UnitName.json
// https://raw.githubusercontent.com/shalzuth/wotv-ffbe-dump/master/en/JobName.json

const Evade = () => {

    const [unitName, set_unitName] = useState<unitName[]>([]);
    const [unitData, set_unitData] = useState<unitData[]>([]);
    //Guardar nomes das unidades por suas chaves

    useEffect(() => {

        //Pega os dados das unidades e insere somente os com tipo "0" (Personagens jogáveis?)
        axios
            .get<unitDataArray>('https://raw.githubusercontent.com/shalzuth/wotv-ffbe-dump/master/data/Unit.json')
            .then(response => {
                console.log(response.data.items);
                const unitsData: unitData[] = [];

                response.data.items.map(item => {
                    if (item.type == 0) {
                        unitsData.push(item)
                    }
                })

                set_unitData(unitsData);
            })

        //Pega a lista de nomes referenciados pela Key    
        axios
            .get<unitNameArray>('https://raw.githubusercontent.com/shalzuth/wotv-ffbe-dump/master/en/UnitName.json')
            .then(response => {
                const unitNames = response.data.infos.map(unitName => unitName);
                set_unitName(unitNames);
            })


    }, [])

    useEffect(() => {

    }, []);



    return (
        <div id="page-evade">
            <main>
                <h1>Página de teste</h1>
                <div className="container">
                    {/* <Card_Char />
                    <Card_EquipsAndSkills />
                    <CardStatus /> */}
                    <ul>
                        {unitData.map(unit => (
                            <li>
                                <h3>
                                    {unitName.find(unitName => unitName.key == unit.iname)?.value}
                                </h3>
                                <p>HP: {unit.status[1].hp}</p>
                                <p>ATK: {unit.status[1].atk}</p>
                                <p>DEF: {unit.status[1].def}</p>
                                <p>Luck: {unit.status[1].luk}</p>
                                <p>AGI: {unit.status[1].spd}</p>
                                <p>Move: {unit.status[1].mov}</p>
                                <p>Jump: {unit.status[1].jmp}</p>
                            </li>
                        ))}
                    </ul>


                </div>
            </main>
        </div>
    )
}

export default Evade;