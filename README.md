## Guía de Práctica con React y la PokeAPI

Api: https://pokeapi.co/docs/v2

### Objetivo
Practicar hooks de React (`useState`, `useEffect`, `useMemo`, `useRef`, `useCallback`), componentes, y fetch de datos usando la PokeAPI. Esta guía te servirá como referencia para preparar pruebas técnicas.

---


### 1. Setup Inicial
- ✅ Asegúrate de tener el proyecto creado y funcionando con Vite y React.
- ✅ Instala dependencias necesarias si falta alguna (`npm install`).
- ✅ Crea una estructura de carpetas en `src/` para organizar componentes, hooks y utilidades:
  - `src/components/` → Componentes de UI (PokemonList, PokemonDetail, SearchBar, etc)
  - `src/hooks/` → Custom hooks (usePokemon, useFetch, etc)
  - `src/utils/` → Funciones auxiliares (formateo, helpers)


---


### 2. Listado de Pokémons (useState, useEffect, fetch)
1. Crea el componente `PokemonList` en `src/components/PokemonList.jsx`.
2. Usa `useState` para guardar la lista de pokémons.
3. Usa `useEffect` para hacer un fetch a la API (`https://pokeapi.co/api/v2/pokemon?limit=20`) y cargar los pokémons al montar el componente.
4. Muestra los nombres de los pokémons en una lista.
5. Maneja el estado de loading y error:
   - Si está cargando, muestra un mensaje o spinner.
   - Si hay error, muestra un mensaje de error.
6. Separa la lógica de fetch en un custom hook `useFetch` en `src/hooks/useFetch.js` para reutilizarla.


---


### 3. Detalle de Pokémon (Componentes, useState, useEffect, fetch)
1. Crea el componente `PokemonDetail` en `src/components/PokemonDetail.jsx`.
2. Al hacer click en un Pokémon de la lista, pasa el nombre/id al componente `PokemonDetail`.
3. Usa `useState` y `useEffect` para hacer fetch a la API de detalles (`https://pokeapi.co/api/v2/pokemon/{id|name}`) y mostrar:
   - Nombre
   - Imagen
   - Tipos
   - Habilidades, etc.
4. Maneja loading y error igual que en la lista.
5. Si no hay Pokémon seleccionado, muestra un mensaje o placeholder.
6. Puedes crear un archivo de utilidades en `src/utils/` para formatear los datos si es necesario.

---


### 4. Buscador de Pokémons (useState, useMemo)
1. Crea un componente `SearchBar` en `src/components/SearchBar.jsx`.
2. Usa `useState` para guardar el texto de búsqueda.
3. Usa `useMemo` en `PokemonList` para filtrar la lista de pokémons según el texto de búsqueda, optimizando el renderizado.
4. Pasa el valor del input y el handler como props entre componentes.
5. El buscador debe diferenciar si se busca por nombre o ID del Pokémon.
❗ 5.1 Si busca por ID, solo mostrara el pokemon con ese ID. ❗
❗ 5.2 Si busca por nombre, mostrara todos los pokemons que contengan ese nombre. ❗



---


### 5. Paginación (useState, useEffect)
1. Añade paginación en `PokemonList`:
   - Usa `useState` para la página actual.
   - Usa `useEffect` para hacer fetch de la página correspondiente (`https://pokeapi.co/api/v2/pokemon?offset=XX&limit=YY`).
2. Crea un componente `Pagination` en `src/components/Pagination.jsx` para los controles de página.
3. Pasa funciones de cambio de página como props usando `useCallback`.


---


### 6. useRef y useCallback
1. En `SearchBar`, usa `useRef` para enfocar el input automáticamente al montar el componente.
2. Usa `useCallback` para memorizar funciones de búsqueda y handlers de click, y pásalos como props a los componentes hijos.


---


### 7. Bonus: Custom Hook
1. Crea un custom hook `usePokemon` en `src/hooks/usePokemon.js` para centralizar la lógica de fetch y estado de pokémons (lista, detalles, loading, error).
2. Usa este hook en los componentes principales para evitar duplicar lógica.


---


### 8. Buenas Prácticas
- Divide la lógica en componentes pequeños y reutilizables.
- Usa PropTypes o TypeScript para tipar los props si lo deseas.
- Añade estilos para mejorar la UI.
- Separa la lógica de negocio (fetch, formateo) de la presentación (componentes de UI).
- Maneja los estados de loading y error en todos los fetchs.
- Usa archivos separados para cada componente/hook/utilidad.


---


### 9. Ideas Extra
- Mostrar loading/spinner mientras se cargan los datos.
- Manejar errores de fetch.
- Añadir favoritos usando `useState` o `useReducer`.
- Añadir tests de componentes y hooks.
- Añadir paginación avanzada o scroll infinito.
- Guardar favoritos en localStorage.

---

### Ejemplo de estructura de archivos

```
src/
  components/
    PokemonList.jsx
    PokemonDetail.jsx
    SearchBar.jsx
    Pagination.jsx
  hooks/
    useFetch.js
    usePokemon.js
  utils/
    formatPokemon.js
  App.jsx
  main.jsx
```

---

### Ejemplo de manejo de estados en hooks

```js
// src/hooks/useFetch.js
import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Error en la petición');
        return res.json();
      })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
```

---

### Consejos para avanzar poco a poco
- Empieza solo mostrando la lista de pokémons.
- Añade el detalle al hacer click.
- Añade el buscador.
- Añade la paginación.
- Refactoriza usando hooks personalizados.
- Añade loading, error y pruebas.

---

¡Sigue la guía paso a paso y tendrás una web bien estructurada y lista para pruebas técnicas!

---

¡Suerte practicando! Modifica esta guía según tus necesidades.