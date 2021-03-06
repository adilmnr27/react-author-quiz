import React from 'react'
import BookName from './BookName'
import Author from './Author';
import booksList from '../utilities/mockDataForBooks.json';
import { shuffle } from 'underscore'; //For Creating a random set of Authors
import { sample } from 'underscore'; //For taking a random book
import { Link } from 'react-router-dom';
import Continue from './Continue';


export default function Turn(props) {


    var [renderAgain, setRenderAgain] = React.useState(false);  //to render the page again
    var books = shuffledBooks(booksList.books);
    var book = getRandomBook(books);
    function getHighlightColor(author) {
        if (author === book.author) {
            return "#6efb61";
        }
        else {
            return "#fb6161"
        }
    }

    /* Many people suggested to use map for it. But wanted to try this out */
    var authors = () => {
        let authors = [];
        for (let i = 0; i < books.length; i++) {
            /* key needs to provided for dynamic lists */
            authors.push(<Author author={books[i].author} getHighlightColor={getHighlightColor} key={books[i].author} />)
        }
        return authors;
    }

    //Shuffling to Get 3 Random books. Calling the shuffle function from underscore library
    function shuffledBooks(books) {
        return shuffle(books).slice(0, 3);
    }

    /* returns a random book from the provided list */
    function getRandomBook(books) {
        return sample(books);
    }

    function continueClicked() {
        //Is called when continue button is clicked
        //updating the state so that it will render the turn component again.
        //doesnt matter the value os true or false as long as the value is changing
        setRenderAgain(!renderAgain)
    }

    function addBook(book = {}) {
        booksList.books.push(book);
    }

    return (
        <>
            <div className="turnContainer">
                <div className="row turn col-10 -1" style={{ backgroundColor: "white" }}>
                    <div className="col-4">
                        <h2><BookName name={book.name} /></h2>
                    </div>
                    <div className="col-6">
                        <h2>{authors()}</h2>
                    </div>
                </div>
            </div>
            <div className="belowTurnContainer">
                <div className="row col-10 -1">
                    <div className="col-4">
                        <Link role="button" className="btn btn-primary" to="/add-Book">Add Book</Link>
                    </div>
                    <div className="col-6">
                        <Continue continueClicked={continueClicked} />
                    </div>
                </div>
            </div>
        </>



    )
}
