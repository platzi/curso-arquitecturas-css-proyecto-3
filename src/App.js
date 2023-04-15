import "./App.css";
import { useState } from "react";
import MiApi from "./repositories/MiApi";
import Header from "./blocks/Header/Header";
import PokemonCard from "./containers/PokemonCard";
import Loader from "./elements/Loader";

function App() {
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("num-low-high");
    const data = MiApi();

    if (!data) return <Loader />;

    const byNum = (info) =>
        info.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));

    const byName = (info) =>
        info.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));

    sort === "num-low-high" && byNum(data);
    sort === "num-high-low" && byNum(data).reverse();
    sort === "name-a-z" && byName(data);
    sort === "name-z-a" && byName(data).reverse();

    const searcher = (data) => {
        return data.filter(
            (item) =>
                item.name.toLowerCase().includes(search) ||
                item.id.toString().includes(search) ||
                item.types[0].type.name.toLowerCase().includes(search) ||
                (item.types[1] &&
                    item.types[1].type.name.toLowerCase().includes(search))
        );
    };

    return (
        <div className="global-container">
            <Header setSearch={setSearch} sort={sort} setSort={setSort} />
            <div className="cards-container">
                <PokemonCard poke={searcher(data)} />
            </div>
        </div>
    );
}

export default App;
