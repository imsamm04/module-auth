import React from 'react';
import RegisterForm from '../RegisterForm';

// Register.PropTypes = {};

function Register(props) {
    const handleSubmit = (values) => {
      console.log('Form submit', values)
    }
   
    return (
        <div>
            <RegisterForm onSubmit = {handleSubmit} />
        </div>
    );
}

export default Register;
