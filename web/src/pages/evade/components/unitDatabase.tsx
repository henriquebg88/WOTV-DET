class unitDatabase {

    public iname: string,
    public charaId: string,
    public rare: number,
    public elem: number[],
    public jobsets: string[],
    public status: [
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
        },
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

    constructor(parameters: Partial<unitDatabase>) {

        Object.assign(this, parameters)

    }
}