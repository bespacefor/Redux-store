import React from 'react';
import BookList from '../book-list/book-list';

const HomePage = () => {
    const books = [
        {
            id: 1,
            title: 'Test test test',
            author: 'Name name name'
        },
        {
            id: 2,
            title: 'Test test test 2',
            author: 'Name name name 2'
        },
    ];
    
    return (
        <BookList books={books} />
    );
};

export default HomePage;
