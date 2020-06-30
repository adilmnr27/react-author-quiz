import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Turn from './Turn';
import { Link } from 'react-router-dom'
export default function AuthorQuiz() {

    const header = "Author Quiz";
    const footer = "Footer";

    return (
        <div className="container  col-10 -1">
            <Header header={header} />
            <Link to="/add-book" >Add a book</Link>
            <Turn />
            <Footer footer={footer} />
        </div>

    )
}