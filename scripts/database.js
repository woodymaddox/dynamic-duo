
export const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 3,
            name: "Venom",
            power: "Super strength"
        },
        {
            id: 4,
            name: "Sandman",
            power: "Sand storm"
        }

    ]

}

export const getVillains = () => {
    return structuredClone(database.villains);
}