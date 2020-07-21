import React, { Component } from 'react'
import API from "../utils/API"

export default class Search extends Component {
    state = {
        books: [],
        bookSearch: ""
    }

    handleOnChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    };
    handleSearchSubmit = event => {
        event.preventDefault();

        API.searchBooks(this.state.bookSearch)
            .then(res => {
                this.setState({ books: res.data.items }, function () {
                    console.log(this.state.books)
                })
            })
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <input
                            name="bookSearch"
                            value={this.state.bookSearch}
                            onChange={this.handleOnChange}
                            placeholder="Search for a Book"
                        />
                        <button
                            onClick={this.handleSearchSubmit}
                            type="success"
                            className="input-lg"
                        >Search</button>
                    </div>
                </div>
                <row>
                    <div>
                        {this.state.books.map(book => {
                            return (
                                <div
                                    key={book.id}
                                    title={book.volumeInfo.authors}
                                    authors={book.volumeInfo.authors}
                                    link={book.volumeInfo.description}
                                    image={book.volumeInfo.imageLinks}
                                ></div>);
                        })}

                    </div>
                </row>

            </div>
        )
    }
}
