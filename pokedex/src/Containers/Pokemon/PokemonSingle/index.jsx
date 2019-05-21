import React from 'react';
import PropTypes from 'prop-types';
import PokemonSingleWrapper from './style';
import ProfileFlip from '../../../Components/ProfileFlip';

const PokemonSingle = ({ pokemon }) => (
    <PokemonSingleWrapper>
        <ProfileFlip
            front={<img src={pokemon.sprites.front_default} />}
            back={<img src={pokemon.sprites.back_default} />}
        />
        <div className="content">
            <div className="principal">
                <h1>{pokemon.name}</h1>
                <div className="detail">
                    <div>
                        <strong>Height:</strong> <span>{pokemon.height}</span>
                    </div>
                    <div>
                        <strong>Weight:</strong> <span>{pokemon.weight}</span>
                    </div>
                </div>
            </div>
            <div className="types">
                <h3>Types</h3>
                <ul>
                    {pokemon.types.map(item => (
                        <li key={item.slot}>{item.type.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    </PokemonSingleWrapper>
);

PokemonSingle.propTypes = {
    pokemon: PropTypes.object,
}

PokemonSingle.defaultProps = {
    pokemon: {},
}

export default PokemonSingle;