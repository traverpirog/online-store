import React from 'react';
import styles from '../styles/Container.module.css'

const Container = (props) => {
    const {className, children} = props;
    return (
        <div className={styles.wrapper + (className ? ` ${className}` : '')}>
            {children}
        </div>
    );
};

export default Container;