import React from 'react';
import Book from './book'


class Shelf extends React.Component {
	render() {
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.name}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{
							this.props.books.map((book, key) => <Book updateBookStatus={this.props.updateBookStatus} book={book} key={key} />)
						}
					</ol>
				</div>
			</div>
		);
	}
}

export default Shelf;