import React from 'react';
import styles from './HeaderLogo.module.scss';
import logo from '../../../assets/notepad.png';
const HeaderLogo = ({ children }) => (
    <div className={styles.logoAlign}>
        <img src={logo} alt="Notepad" className={styles.logo}/>
        <span>{children}</span>
    </div>
);

export default HeaderLogo;