import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../Components/Button';

const style = {
    div: {
        marginTop: '20px'
    },
    title: {
        textTransform: 'capitalize'
    },
    footer: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}

const Move = ({ move, voltar }) => (
    <div style={style.div}>
        <h4 style={style.title}>{move.name}</h4>
        <br />
        <strong>Effect Entries</strong>
        {move.effect_entries.map(item => <div>{item.short_effect}</div>)}
        <div style={style.footer}>
            <Button icon="fas fa-long-arrow-alt-left" onClick={voltar}>
                {'Voltar'}
            </Button>
        </div>
    </div>
);

Move.propTypes = {
    move: PropTypes.object.isRequired,
    voltar: PropTypes.func,
}

Move.defaultProps = {
    voltar: null,
}

export default Move;