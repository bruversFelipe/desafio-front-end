import React from 'react';
import CardPokemon from '../../Components/CardPokemon';
import Loading from '../../Components/Loading';
import PokemonsContext from '../../Pages/MeusPokemons/PokemonsContext';

const PokemonSingle = React.lazy(() => import('./PokemonSingle'));
const PokemonDetail = React.lazy(() => import('./PokemonDetail'));

const Pokemon = ({ permiteExcluir, pokemon, loading }) => (
    <PokemonsContext.Consumer>
        {({ savePokemon, deletePokemon, }) => (
            <React.Suspense fallback={<Loading loading />}>
                {Object.keys(pokemon).length > 0 &&
                    <CardPokemon
                        bordered={false}
                        expanded
                        permiteExcluir={permiteExcluir}
                        capturarPokemon={() => savePokemon(pokemon)}
                        excluiPokemon={() => deletePokemon(pokemon)}
                        pokemonAtual={pokemon.id}
                    >
                        {({ expand }) =>
                            expand ? (
                                <Loading loading={loading}>
                                    <PokemonDetail pokemon={pokemon} />
                                </Loading>
                            ) : (
                                    <Loading loading={loading}>
                                        <PokemonSingle pokemon={pokemon} />
                                    </Loading>
                                )
                        }
                    </CardPokemon>
                }
            </React.Suspense>
        )}
    </PokemonsContext.Consumer>
);

export default Pokemon;