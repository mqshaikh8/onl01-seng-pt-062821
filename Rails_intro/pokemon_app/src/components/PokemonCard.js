import {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard(props) {
  const {pokemon} = props
  const [showFront, setShowFront] = useState(true)

  return (
    <Card>
      <div onClick={() => setShowFront(!showFront)}>
        <div className="image">
          <img alt="oh no!" src={showFront ?  pokemon.sprite?.front : pokemon.sprite?.back}/>
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
