import { useState } from "react";
import "./App.css";
import MiApi from "./Components/MiApi";
import Card from "./Components/Card";

function App() {
    const [search, setSearch] = useState("");
    const data = MiApi();
    
    if (!data) return <div>Cargando...</div>;
    
    // data.sort((a, b) => (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0).reverse()
    
    const searcher = (data) => {
        return data.filter(
            (item) =>
                item.name.toLowerCase().includes(search) ||
                item.id.toString().includes(search)
        );
    };
    
    return (
        <>
            <input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
            ></input>
            <div className="containerCards">
                <Card poke={searcher(data)} />
            </div>
        </>
    );
}

export default App;
