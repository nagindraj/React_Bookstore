import React from 'react';
import Book from './book';

const BookList = (props) => {
    let booksDiv = props.books.map(function(book) {
        const image = book.portada;
        const title = book.titulo;
        const desc = book.descripcion;
        return <Book key={title} image={image} title={title} desc={desc}/>
    });

    return ( 
        booksDiv   
    );
} 
export default BookList;