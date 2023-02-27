import { useState } from "react";
import "./App.css";
import MiApi from "./Components/MiApi";
import Card from "./Components/Card";
import Loading from "./Components/Loading";

function App() {
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("num-low-high");

    const data = MiApi();

    const byNum = (info) =>
        info.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));

    const byName = (info) =>
        info.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));

    if (!data) return <Loading />;

    sort === "num-low-high" && byNum(data);
    sort === "num-high-low" && byNum(data).reverse();
    sort === "name-a-z" && byName(data);
    sort === "name-z-a" && byName(data).reverse();

    const searcher = (data) => {
        return data.filter(
            (item) =>
                item.name.toLowerCase().includes(search) ||
                item.id.toString().includes(search)
        );
    };

    return (
        <div className="global-container">
            <header>
                <div className="logo-container">
                    <img
                        className="logo"
                        alt="pokemon logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
                    />
                    <h1>First Gen</h1>
                </div>
                <div className="filter-container">
                    <input
                        type="text"
                        placeholder="Search by Name or Number"
                        onChange={(e) =>
                            setSearch(e.target.value.toLowerCase())
                        }
                    ></input>
                    <label htmlFor="sort">Sort by:</label>
                    <select
                        name="sort"
                        id="sort"
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                    >
                        <option value="num-low-high">Number: Low - High</option>
                        <option value="num-high-low">Number: High - Low</option>
                        <option value="name-a-z">Name: A - Z</option>
                        <option value="name-z-a">Name: Z - A</option>
                    </select>
                </div>
            </header>
            <div className="cards-container">
                <Card poke={searcher(data)} />
            </div>
        </div>
    );
}

export default App;
