import React from 'react';
import BookCard from './BookCard';

const BookListItem = (props) => {
        const { data, onItemClick } = props;
        return (
            <li className="book-list-item m-2" onClick={
                () => {
                    onItemClick(data.id);
                }
            }>
                <BookCard data={data} />
            </li>
        );
}

export default BookListItem;