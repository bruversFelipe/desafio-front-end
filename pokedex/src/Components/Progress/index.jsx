import React from 'react';
import PropTypes from 'prop-types';
import ProgressWrapper from './style';

const Progress = ({ percent }) => {
    const widthProgress = { width: `${percent}%` };
    return (
        <ProgressWrapper><div className="progress" style={widthProgress}></div></ProgressWrapper>
    );
}

Progress.propTypes = {
    percent: PropTypes.number
}

Progress.defaultProps = {
    percent: 0
}

export default Progress;