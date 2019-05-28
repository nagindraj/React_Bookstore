import React from 'react';
import ReactDOM from 'react-dom';
import BookList from './booklist';
import axios from 'axios';


class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            books: []
        };
    }

    componentDidMount() {
        this.fetchBooks();
    }

    fetchBooks() {
        const url = 'https://api.myjson.com/bins/udbm5';

        axios.get(url)
        .then((response) => {
            console.log(response);
            this.setState({ books: response.data.books });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return(
            <div>
                <BookList books={this.state.books}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);