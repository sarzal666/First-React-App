import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, className, ...props }) => {
    return (
        <button className={`${styles.Button} ${className} `} {...props}>{children}</button>

    )
};
export default Button;