import React from 'react';
import styles from './ListItem.module.scss'
import AppContext from '../../../context';

class ListItem extends React.Component {
    
    state = {
        title: this.props.title,
        description: this.props.description,
        key: this.props.dataKey,
    };
    createShortDesc = desc => {
        const arr = desc.split(' ', 10);
        arr.push('. . .');
        let string = '';
        arr.forEach(el => {
            string += `${el} `;
        });
        return string;
    };
    update = () => {
        this.forceUpdate();
    }

    render() {
        
        return (
            <AppContext.Consumer>
                {context => (
                    <li 
                    data-key={this.state.key}
                    className={styles.ListItem}
                    onClick={() => {
                        context.DisplayNote(this.state);
                        this.update();
                        }} >
                        <img src="https://picsum.photos/id/1/500/500" alt ="Note" className={styles.ListItem__Img}/>
                        <div className={styles.ListItem__wrapper}>
                            <h2 
                            className={styles.ListItem__Title}>
                                {this.state.title}
                                </h2>
                            <p 
                            className={styles.ListItem__shortDescription}>
                                {this.createShortDesc(this.state.description)}
                            </p>
                        </div>
                    </li>
                )}
            </AppContext.Consumer>
        )
    }
}

export default ListItem;


        // <AppContext.Consumer>
        // <li className={styles.ListItem} onClick={ context => context.DisplayModal()}>
        //     <img src="https://picsum.photos/id/1/500/500" alt ="Note" className={styles.ListItem__Img}/>
        //     <div className={styles.ListItem__wrapper}>
        //         <h2 
        //         className={styles.ListItem__Title}>
        //             {this.state.title}
        //             </h2>
        //         <p 
        //         className={styles.ListItem__shortDescription}>
        //             {this.createShortDesc(this.state.description)}
        //         </p>
        //     </div>
        // </li>
        // </AppContext.Consumer>