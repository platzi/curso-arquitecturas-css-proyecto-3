const Card = ({ poke }) => {
    return poke.map((item) => (
        <div className="card" key={item.id}>
            <h1>{item.id}</h1>
            <h1>{item.name}</h1>
            <img src={item.sprites.front_default} alt={`${item.name} sprite`} />
        </div>
    ));
};

export default Card;
