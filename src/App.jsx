import { useState } from 'react'
import './App.css'
import { Buscador } from './components/buscador'
import { Pokemon } from './components/PokemonCard'
import withResults from './mooks/one-result.json'

function App () {
  const [pokemon, setPokemon] = useState(null)

  // Simula búsqueda: siempre devuelve withResults
  const handleSearch = (searchValue) => {
    // Aquí podrías hacer fetch en el futuro
    setPokemon(withResults)
  }

  // Extrae datos solo si hay resultado
  const name = pokemon?.forms?.[0]?.name
  const foto = pokemon?.sprites?.other?.home?.front_default

  return (
    <>
      <Buscador onSearch={handleSearch} />

      <main>
        <Pokemon pokemon={pokemon} name={name} foto={foto}/>
      </main>
    </>
  )
}

export default App
