import React, { useState } from 'react';

const PokemonsContext = React.createContext();

const PokemonsContextProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([]);

    const savePokemon = (item) => {
        const newArr = pokemons;
        newArr.push(item);
        setPokemons(newArr);
    }

    const deletePokemon = (item) => {
        let array = [];
        array = pokemons.filter(poke => poke.id !== item.id);
        setPokemons(array);
    }

    return (
        <PokemonsContext.Provider value={{
            savePokemon,
            deletePokemon,
            pokemons
        }}>
            {children}
        </PokemonsContext.Provider>
    )
}

export { PokemonsContextProvider };

export default PokemonsContext;