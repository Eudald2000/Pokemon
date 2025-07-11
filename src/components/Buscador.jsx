import { useState } from 'react'

export const Buscador = ({ onSearch }) => {
  const [input, setInput] = useState('')

  function handleSubmit (e) {
    e.preventDefault()
    if (onSearch) onSearch(input)
  }

  function handleChange (e) {
    const newPokemon = e.target.value
    setInput(newPokemon)
  }

  return (
    <header className="container text-center mt-4">
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokemonInput" className="form-label">
          Nombre o número de Pokédex
        </label>
        <input
          id="pokemonInput"
          name="pokemon"
          type="text"
          className="mb-3 m-auto"
          placeholder="Ej. bulbasaur o 001"
          value={input}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">
          Buscar
        </button>
      </form>
    </header>
  )
}
