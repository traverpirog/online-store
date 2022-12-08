import React from 'react';
import styles from '../styles/Input.module.css'

const Input = (props) => {
    const {className} = props;
    return (
        <input {...props} className={styles.input + (className ? ` ${className}` : '')}/>
    );
};

export default Input;