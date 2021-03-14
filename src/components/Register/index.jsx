import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../Register';

index.propTypes = {
    
};

function Register(props) {
    handleSubmit = (value) => {
        console.log('Form submit', value)
    }
    return (
        <div>
            <RegisterForm onSubmit = {handleSubmit} />
        </div>
    );
}

export default Register;