import React from 'react';
import PropTypes from 'prop-types';
import MainLayoutWrapper from './style';
import Header from './Header';

const MainLayout = ({ children }) => {
    return (
        <MainLayoutWrapper>
            <Header />
            <div className="section">
                <div className="conteudo">
                    {children}
                </div>
            </div>
        </MainLayoutWrapper>
    );
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default MainLayout;