import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getPokemon } from '../../../Redux/Redux';
import Button, { ButtonGroup } from '../../../Components/Button';
import Input from '../../../Components/Input';
import BuscaPokemonFormWrapper from './style';

const valuesButtons = [
    {
        value: 'id',
        title: 'ID',
    },
    {
        value: 'nome',
        title: 'Nome',
    },
]

const BuscaPokemonForm = ({ getPokemon }) => {
    const [valueInput, setValueInput] = useState('');
    const [valueRadio, setValueRadio] = useState('id');

    const onChangeInput = (e) => {
        const { value } = e.target;
        setValueInput(value);
    }

    const onChangeRadio = (e) => {
        setValueInput('');
        setValueRadio(e);
    }

    const buscar = () => {
        if (valueInput !== '') {
            getPokemon(valueInput);
        }
    }
    return (
        <BuscaPokemonFormWrapper>
            <h4>Pesquisar um pokemon por ID ou por nome</h4>
            <ButtonGroup defaultValue={valueRadio} valuesButtons={valuesButtons} onChange={onChangeRadio} />
            <div className="search">
                <Input
                    name="poke"
                    type={valueRadio === 'id' ? "number" : 'text'}
                    onChange={onChangeInput}
                    value={valueInput}
                />
                <Button icon="fas fa-search" onClick={buscar}>Buscar</Button>
            </div>
        </BuscaPokemonFormWrapper >
    );
}


export default connect(null, {
    getPokemon
})(BuscaPokemonForm);