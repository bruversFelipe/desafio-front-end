import React from 'react';
import PropTypes from 'prop-types';
import ButtonWrapper, { ButtonGroupWrapper } from './style';
import Icon from '../Icon';

const Button = ({ children, icon, ...props }) => (
    <ButtonWrapper {...props}>
        {icon &&
            <Icon type={icon} size="14px" />
        }
        {children}
    </ButtonWrapper>
);

const ButtonGroup = ({ defaultValue, valuesButtons, onChange }) => {
    const onClick = (key) => {
        onChange(key);
    }

    return (
        <ButtonGroupWrapper>
            {valuesButtons.map(item => (
                <Button
                    key={item.value}
                    className={defaultValue === item.value ? 'active' : ''}
                    onClick={() => onClick(item.value)}>
                    {item.title}
                </Button>
            ))}
        </ButtonGroupWrapper>
    );
}

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

Button.defaultProps = {
    children: null,
}

export { ButtonGroup };
export default Button;