import React from 'react';
import styles from './Note.module.scss';
import Button from '../Button/Button';
import AppContext from '../../context';

    class Note extends React.Component {
        state = {
            description: null,
        }

        ControlValue = e => {
            this.setState({
                description: e.target.value,
            })
        }
        render() {
            return (
                <AppContext.Consumer>
                    {context => (     
                 <div className={styles.note} key= {context.note.key}>
                   <div className={styles.note__headerAlign}>
                       <h1 className={styles.note__header}> {context.note.title} </h1>
                       <Button
                       className = {`${styles.note__CloseBtn}`}
                       onClick = {() => context.HideNote()}
                       >X</Button>
                   </div>
                   <div className={styles.note__noteAlign}>
                       <textarea className={styles.note__textarea}
                            onChange = {(e) => this.ControlValue(e)}
                            defaultValue= {context.note.description}
                       ></textarea>
                       <Button
                        onClick={() => context.SaveNote(this.state.description, context.note.key)}
                       >
                           Save
                       </Button>
                   </div>
                </div>
                    )}
                </AppContext.Consumer>

            )
        }
    };

    export default Note;