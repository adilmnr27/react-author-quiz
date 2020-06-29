import React from 'react'
import BookName from './BookName'
import Author from './Author';
import booksList from '../utilities/mockDataForBooks.json';
import {shuffle} from 'underscore'; //For Creating a random set of Authors
import {sample} from 'underscore'; //For taking a random book

export default function Turn(props) {

    var books = shuffledBooks(booksList.books);
    var book = getRandomBook(books);

    /* Many people suggested to use map for it. But wanted to try this out */
    var authors = () => {
        let authors = [];
        for (let i = 0; i < books.length; i++) {
            /* key needs to provided for dynamic lists */
            authors.push(<Author author={books[i].author} key={books[i].author} />)
        }
        return authors;
    }

    //Shuffling to Get 3 Random books. Calling the shuffle function from underscore library
    function shuffledBooks(books){
        return shuffle(books).slice(0,3);
    }

    /* returns a random book from the provided list */
    function getRandomBook(books){
        return sample(books);
    }

    return (
        <div className="row turn col-10 -1" style={{ backgroundColor: "white" }}>
            <div className="col-4">
               <h2><BookName name={book.name}/></h2>
            </div>
            <div className="col-6">
                <h2>{authors()}</h2>
            </div>
        </div>
    )
}
