import React from 'react';
import styles from './List.module.scss';
import ListItem from './ListItem/ListItem';
import AppContext from '../../context';

const List = () => (
    <AppContext.Consumer>
        { context => (
    <ul className={styles.List}>
        {context.Items.map(el => (
            <ListItem
            title={el.title}
            description={el.description}
            key={`${el.key}`}
            dataKey={el.key}
            ></ListItem>
        ))}
    </ul>
        )} 
    </AppContext.Consumer>
);

export default List;