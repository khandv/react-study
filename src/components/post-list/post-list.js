import React from 'react';
import { ListGroup } from 'reactstrap';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts, onDelete, onToggleItem}) => {
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <PostListItem
                     {...itemProps}
                     onDelete={() => onDelete(id)}
                     onToggleImportant={() => onToggleItem(id, 2)}
                     onToggleLiked={() => onToggleItem(id, 1)}/>
            </li>
        )
    })
    return (
        <ListGroup className="app-list list-group">
            {elements}
        </ListGroup>
    )
}

export default PostList;