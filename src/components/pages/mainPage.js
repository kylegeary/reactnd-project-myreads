import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from '../shelf'
import * as BooksAPI from '../../BooksAPI'


class mainPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			books: []
		}
	}

	componentDidMount() {
		BooksAPI.getAll()
		.then(response => {
				this.setState({ books: response });
		});
	}

	updateBookStatus = (book, shelf) => {
		BooksAPI.update(book, shelf)
		.then(response => {
			book.shelf = shelf;
			this.setState(state => ({
				books: state.books.filter(b => b.id !== book.id).concat([book])
			}))
		});
	}

	render() {
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<Shelf updateBookStatus={this.updateBookStatus} name="Currently Reading" books={this.state.books.filter(book => book.shelf === "currentlyReading")} />
						<Shelf updateBookStatus={this.updateBookStatus} name="Want To Read" books={this.state.books.filter(book => book.shelf === "wantToRead")} />
						<Shelf updateBookStatus={this.updateBookStatus} name="Read" books={this.state.books.filter(book => book.shelf === "read")} />
					</div>
				</div>
				<div className="open-search">
					<Link to="/search">Add a book</Link>
				</div>
			</div>
		);
	}
}

export default mainPage;