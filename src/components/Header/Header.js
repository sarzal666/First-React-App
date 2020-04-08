import React from 'react';
import styles from './Header.module.scss';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import Button from '../Button/Button';

const Header = ({ openModal }) => (
    <header className={styles.App__header}>
        <HeaderLogo className={styles.Header__Logo}>NotePad</HeaderLogo>
                <Button 
                className={styles.Header__Button}
                onClick={openModal}
                >Add Note
                </Button>
    </header>
);
export default Header;