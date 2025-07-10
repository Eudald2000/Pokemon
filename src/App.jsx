import "./App.css";

function App() {
  return (
    <div className="container py-4">
      <nav className="navbar navbar-dark bg-primary mb-4 rounded">
        <span className="navbar-brand mb-0 h1">Poké Explorer</span>
      </nav>

      <div className="text-center">
        <h1 className="mb-3">¡Bienvenido, Entrenador!</h1>
        <p className="lead">
          Busca tus Pokémon favoritos, consulta sus habilidades y crea tu equipo ideal.
        </p>
        <button className="btn btn-success mt-3">¡Atrapa ese Pokémon!</button>
      </div>
    </div>
  );
}

export default App;
