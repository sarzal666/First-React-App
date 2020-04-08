import React from 'react';
import styles from './Body.module.scss';
import List from '../List/List';
import Note from '../Note/Note';
import AppContext from '../../context';

class Body extends React.Component {

    render() {
        return(
        <AppContext.Consumer>
            {context => (
            <main className={styles.main}>
                <List/>
                <div className={styles.wrapper}>
                    {context.OpenNote && <Note/>}
                </div>
            </main>
            )}
        </AppContext.Consumer>
        )
    }
}

export default Body;