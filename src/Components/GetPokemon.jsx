const GetPokemon = ({data}) => {
    return (
        <>
        {data.map((item) => (
            <div key={item.id}>
                <h2>{item.id}</h2>
                <h1>{item.name}</h1>
            </div>
        ))}
        </>
    )
}

export default GetPokemon