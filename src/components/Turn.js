import React from 'react'
import BookName from './BookName'
import Author from './Author';
export default function Turn(props) {

    /* Many people suggested to use map for it. But wanted to try this out */
    var authors = () => {
        let authors = [];
        for (let i = 0; i < props.books.length; i++) {
            /* key needs to provided for dynamic lists */
            authors.push(<Author author={props.books[i].author} key={props.books[i].author} />)
        }
        return authors;
    }


    return (
        <div className="row turn col-10 -1" style={{ backgroundColor: "white" }}>
            <div className="col-4">
               <h2><BookName name={props.name}/></h2>
            </div>
            <div className="col-6">
                <h2>{authors()}</h2>
            </div>
        </div>
    )
}
