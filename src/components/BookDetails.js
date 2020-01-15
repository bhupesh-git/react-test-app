import React from 'react';
import { connect } from 'react-redux';


import BookCard from './BookCard';

const BookDetails = (props) => {
    const { activeItem } = props;
    return (
        <BookCard data={activeItem} isDetailCard={true}/>
    );
}

const mapStateToProps = (state) => {
    return {
        activeItem: state.bookReducer.activeBook
    }
}

export default connect(mapStateToProps)(BookDetails);