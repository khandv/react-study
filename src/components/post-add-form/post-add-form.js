import React from 'react';
import './post-add-form.css';
import './post-add-form.css';

export default class PostAddForm extends React.Component {
    render() {
        return (
            <div className="bottom-panel d-flex">
                <input
                    type="text"
                    placeholder="О чем вы думаете сейчас?"
                    className="form-control new-post-label"
                />
                <button 
                    type="submit" 
                    className="btn btn-outline-secondary"
                    onClick={() => this.props.onAdd('Hello')}>
                    Добавить</button>
            </div>
        )
    }
}
