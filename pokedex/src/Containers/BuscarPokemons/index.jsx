import React from 'react';
import { connect } from 'react-redux';
import BuscaPokemonForm from './BuscaPokemonForm';
import Pokemon from '../Pokemon';

const divCard = { background: '#fff', padding: '14px' }

const BuscaPokemon = ({ pokemon, loading}) => (
    <React.Fragment>
        <div style={divCard}>
            <BuscaPokemonForm />
        </div>
        <br />
        <Pokemon pokemon={pokemon} loading={loading} />
    </React.Fragment>
);

const mapStateToProps = state => {
    return {
        pokemon: state.dataSource,
        loading: state.loading
    }
}

export default connect(mapStateToProps, {})(BuscaPokemon);