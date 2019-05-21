import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Red from './Red';
import combineThemes from './combineThemes';

const ThemeContext = React.createContext();

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(Red);
    const [visibleTheme, setVisibleTheme] = useState(true);

    const closeMenu = () => {
        setVisibleTheme(false);
    }

    const openMenu = () => {
        setVisibleTheme(true);
    }

    const toggleTheme = keyTheme => {
        setTheme(combineThemes[keyTheme]);
    };

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme, visibleTheme, openMenu, closeMenu }}>
            {children}
        </ThemeContext.Provider>
    )
}

ThemeContextProvider.propTypes = {
    children: PropTypes.object.isRequired
}

export { ThemeContextProvider };
export default ThemeContext;