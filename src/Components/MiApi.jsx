import { useState, useEffect } from "react";

const MiApi = () => {
    const [pokeList, setPokeList] = useState(null);

    const getPokes = async (qty = 151) => {
        const url = "https://pokeapi.co/api/v2/pokemon";
        const res = await fetch(`${url}?limit=${qty}&offset=0`);
        const initialData = await res.json();

        const promises = initialData.results.map(async (poke) => {
            const res = await fetch(poke.url);
            const data = await res.json();
            return data;
        });

        const pokes = await Promise.all(promises);
        setPokeList(pokes);
    };

    useEffect(() => {
        getPokes();
    }, []);

    return pokeList ;
};

export default MiApi