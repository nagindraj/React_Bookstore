import React from 'react';
import './book.css';

const Book = (props) => {
    return (
        <div className="card">
            <img className="card-img-left" src={props.image} alt=""/>
            <div className="card-body">
                <h6 className="card-title">{props.title}</h6>
                <p className="card-text">{props.desc}</p>
            </div>
        </div>
    );
}

export default Book;