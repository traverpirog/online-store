import React from 'react'
import styles from '../../styles/Subtitle.module.css'

const Subtitle = (props) => {
    const {children, className} = props;
    return (
        <h2 className={styles.block + (className ? ` ${className}`: ' ')} {...props}>{children}</h2>
    );
};

export default Subtitle;