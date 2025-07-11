const PokemonCard = ({ name, foto }) => {
  return (
    <div className="container-inner">
      <div className="card card-pokemon card-fire">
        <div className="card-block">
          <div className="card-subtitle text-xs-right">
            Evolves from Charmeleon - <strong>120HP</strong>
          </div>
        </div>
        <img src={foto} alt="Pokecard Image" />
        <div className="card-block">
          <h4 className="card-title">
            {name}
            <small>Flame Pokemon. Length 5' 7", Weight: 200 lbs.</small>
          </h4>
          <p className="card-text">
            <strong>Pokemon Power: Energy Burn</strong> As often as you like
            during your turn (<i>before your attack</i>), you may turn all
            Energy attached to Charizard into flame Energy for the rest of the
            turn. This power can't be used if Charizard is Asleep, Confused or
            Paralyzed.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Fire Spin</strong> Discard 2 Energy cards attached to
            Charizard in order to use this attack.
          </li>
        </ul>
      </div>
    </div>
  )
}

const NoPokemon = () => {
  return (
    <div className="alert alert-warning text-center mt-4" role="alert">
      ⚠️ No se ha encontrado ningún Pokémon con ese nombre o número.
    </div>
  )
}

export function Pokemon ({ pokemon, foto, name }) {
  return (
    pokemon
      ? <PokemonCard name={name} foto={foto}/>
      : <NoPokemon/>
  )
}
