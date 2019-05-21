import React from "react";
import PropTypes from 'prop-types';
import TitleWrapper from "./style";

const Title = ({ title }) => <TitleWrapper>{title}</TitleWrapper>;

Title.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
}

export default Title;
