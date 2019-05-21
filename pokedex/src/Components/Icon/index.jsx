import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ className, type, size, ...props }) => {
    const sizeIcon = { fontSize: size };
    return (
        <i className={`${type} ${className}`} style={sizeIcon} {...props}></i>
    );
}

Icon.propTypes = {
    type: PropTypes.string,
    size: PropTypes.string,
}

Icon.defaultProps = {
    type: '',
    size: '16px',
}

export default Icon;