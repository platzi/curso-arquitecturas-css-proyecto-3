import { useState, useEffect } from "react";

const MiApi = () => {
    const [pokeList, setPokeList] = useState([])

    const getPokes = async (qty = 151) => {
        const url = "https://pokeapi.co/api/v2/pokemon"
        const res = await fetch(`${url}?limit=${qty}&offset=0`);
        const data = await res.json();

        const promises = data.results.map(async (poke) => {
            const res = await fetch(poke.url);
            const data = await res.json();
            return data;
        });

        const pokes = await Promise.all(promises)
        setPokeList(pokes);
    };
    
    useEffect(() => {
        getPokes();
    }, []);

    return pokeList
};

export default MiApi;
