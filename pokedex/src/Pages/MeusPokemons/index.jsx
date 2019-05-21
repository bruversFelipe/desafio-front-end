import React from 'react';
import PokemonsContext from './PokemonsContext';
import Pokemon from '../../Containers/Pokemon';
import MeusPokemonsWrapper from './style';

const style = {
    div: {

        background: '#fff',
        padding: '24px',
    },
    title: {
        fontFamily: 'Raleway, sans-serif'
    }
}

const MeusPokemons = () => (
    <PokemonsContext.Consumer>
        {({ pokemons }) => (
            <MeusPokemonsWrapper>
                {pokemons.length > 0 ?
                    <React.Fragment>

                        {pokemons.map(item => (
                            <div key={item.id}>
                                <Pokemon pokemon={item} />
                                <br />
                            </div>
                        ))}
                    </React.Fragment>
                    :
                    <div style={style.div}>
                        <h3 style={style.title}>Você ainda não possui nenhum pokemon capturado</h3>
                    </div>
                }
            </MeusPokemonsWrapper>
        )}
    </PokemonsContext.Consumer>
);

export default MeusPokemons;