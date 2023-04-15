const Header = ({ setSearch, setSort, sort }) => {
    return (
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
                <div className="input-container">
                    <input
                        name="búsqueda"
                        type="text"
                        placeholder="Search by Name, Number or Type"
                        onChange={(e) =>
                            setSearch(e.target.value.toLowerCase())
                        }
                    ></input>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
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
    );
};

export default Header;
