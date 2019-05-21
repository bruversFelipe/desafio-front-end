import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Components/Icon';
import SelectThemeWrapper from './style';
import ThemeContext from '../ThemeContext';

const SelectTheme = ({ onClose }) => {
    const context = useContext(ThemeContext);

    const clickButton = (item) => {
        const { toggleTheme } = context;
        toggleTheme(item);
        onClose();
    }

    return (
        <SelectThemeWrapper>
            <div className="title">
                <h2>Selecione a cor de sua pokedéx</h2>
                <p>Você poderá alterar depois.</p>
            </div>
            <div className="content">
                <div onClick={() => clickButton('red')} className="red"></div>
                <div onClick={() => clickButton('dark')} className="dark"></div>
                <div onClick={() => clickButton('blue')} className="blue"></div>
                <div onClick={() => clickButton('green')} className="green"></div>
            </div>
            <div className="close">
                <Icon type="fas fa-times" onClick={onClose} />
            </div>
        </SelectThemeWrapper>
    );
}

SelectTheme.propTypes = {
    onClose: PropTypes.func.isRequired
}

export default SelectTheme;
