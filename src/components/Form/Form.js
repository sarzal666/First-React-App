import React from 'react';
import styles from './Form.module.scss';
import AppContext from '../../context';
import Button from '../Button/Button';

class Form extends React.Component {
    state = {
        newItem: [],
        title: null,
        description: null,
        key: null,
    };

    handleInputValue = (e) => {
        const type = e.target.name;
        const value = e.target.value;
        this.setState({
           [type]: value ,
        });
    };
    createItem = () => {
        const { title, description } = this.state;
        return  {
            title,
            description,
            key: `${Math.ceil(Math.random() * 100)}`,
        }
    }
    render() {
        return(
        <AppContext.Consumer>
            {context => (
        <form className={styles.form} onSubmit={(e) => context.AddItem(e,this.createItem())}>
            <h2 className={styles.header}>Add new Note</h2>
            <label htmlFor="title">Title:</label>
            <input
            type="text"
            className={styles.input}
            name="title"
            onChange={this.handleInputValue}
            required
            />
            <label htmlFor="description">Description:</label>
            <textarea 
            className={styles.textarea}
            name="description"
            onChange={this.handleInputValue}
            required
            />
            <Button
            type="submit"
            >Add</Button>
        </form>
            )}
        </AppContext.Consumer>)
        }
}

export default Form;