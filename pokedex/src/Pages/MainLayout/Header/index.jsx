import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import HeaderWrapper from './style';
import Icon from '../../../Components/Icon'
import ThemeContext from '../../../Themes/ThemeContext';

const Header = () => {
    const context = useContext(ThemeContext);

    const open = () => {
        const { openMenu } = context;
        openMenu();
    }

    return (
        <React.Fragment>
            <HeaderWrapper>
                <h1><Link to="/">Pokedéx</Link></h1>
                <div className="right">
                    <div className="menu">
                        <ul>
                            <li>
                                <Link to="/buscar">Buscar Pokemons</Link>
                            </li>
                            <li>
                                <Link to="/meus-pokemons">Meus Pokemons</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="settings">
                        <Icon type="fas fa-cog" onClick={open} />
                    </div>
                </div>
            </HeaderWrapper>
        </React.Fragment>
    )
}

export default Header;