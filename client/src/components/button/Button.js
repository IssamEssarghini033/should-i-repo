import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({ disabled =false, label, onClick= () => {} , type='button', variant='primary' }) => {
    return (
        <button 
            className={`button ${variant}`}
            type={type} 
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
}

Button.propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
};

export default Button;
