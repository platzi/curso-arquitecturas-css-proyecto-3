import Card from '../../blocks/Card';
import Pills from '../../blocks/Pills';

const PokemonCard = ({ poke }) => {
	const type1 = type => type.types[0].type.name
	const type2 = type => type.types[1].type.name

	return poke.map((item) => (
    <Card className="card" key={item.id}>
      <Card.Header>
        #{item.id}
      </Card.Header>
      <Card.Figure type={type1(item)}>
        <Card.Image
          src={item.sprites.front_default}
          alt={`${item.name} sprite`} />
      </Card.Figure>
      <Card.Title>
        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
      </Card.Title>
      <Pills>
        <Pills.Pill type={type1(item)}>
          {type1(item)}
        </Pills.Pill>
        {item.types[1] &&
          <Pills.Pill type={type2(item)}>
            {type2(item)}
          </Pills.Pill>}
      </Pills>
    </Card>
	));
};

export default PokemonCard;