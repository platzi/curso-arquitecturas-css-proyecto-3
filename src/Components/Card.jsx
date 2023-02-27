const Card = ({ poke }) => {
    const type1 = type => type.types[0].type.name
    const type2 = type => type.types[1].type.name

    return poke.map((item) => (
        <div className="card" key={item.id}>
            <h3 className="number">#{item.id}</h3>
            <img
                className="sprite"
                src={item.sprites.front_default}
                alt={`${item.name} sprite`}
            />
            <div className={`back-color ${type1(item)}`}></div>
            <div className="card-bottom">
                <h2 className="name">
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </h2>
                <div className="type-container">
                    <h3 className={type1(item)}>{type1(item)}</h3>
                    {item.types[1] && <h3 className={type2(item)}>{type2(item)}</h3>}
                </div>
            </div>
        </div>
    ));
};

export default Card;
