import React from 'react'
import Header from './Header'
import Footer from './Footer'
import booksList from '../utilities/mockDataForBooks.json';
import Turn from './Turn';
import {shuffle} from 'underscore'; //For Creating a random set of Authors
import {sample} from 'underscore'; //For taking a random book
export default function AuthorQuiz() {

    const header = "Author Quiz";
    const footer = "Footer";
    var books = shuffledBooks(booksList.books);
    var book = getRandomBook(books);

    //Shuffling to Get 3 Random books. Calling the shuffle function from underscore library
    function shuffledBooks(books){
        return shuffle(books).slice(0,3);
    }

    /* returns a random book from the provided list */
    function getRandomBook(books){
        return sample(books);
    }

    return (
        <div className="container  col-10 -1">
            <Header header={header}/>
            <Turn name={book.name} books={books}  />
            <Footer footer={footer}/>
        </div>
      
    )
}