import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

/* This class could have been written with normal function as well as React has provided React hooks
This has been written as class format for practice */

/*Adding Book to the list*/


/* creating a wrapper as we were not able to pass props directly to the component*/
/* withRouter used to enable history.push*/
const AddBookWrapper = withRouter((props) => 
    <AddBook addBook={(book) => {
        console.log(book);
        props.history.push("/")
    }}/>

);
class AddBook extends Component {



    constructor(props) {
        super(props);
        this.state = {
            "name": "",
            "author": "",
            "img": ""
        }
        this.setField = this.setField.bind(this) //Binding this so that it is available to setField Method
        this.submitForm = this.submitForm.bind(this)
    }

    setField(event) {
        let key = event.target.id;
        let value = event.target.value
        this.setState({
            [key]: value
        })

        /* If we write in the below manner
          this.setState({
            key: value
        })
        it will create a new "key" attribute in json
        */

    }

    submitForm(event) {
        event.preventDefault();
        this.props.addBook(this.state);
    }
    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Book Name</label>
                        <input type="text"
                            className="form-control"
                            id="name"
                            onChange={this.setField}
                            value={this.state.name}
                            aria-describedby="Book name"
                            placeholder="Enter Book Name" />
                        <small id="name" className="form-text text-muted">We'll never share your info with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Author">Author</label>
                        <input type="text"
                            className="form-control"
                            onChange={this.setField}
                            value={this.state.author}
                            id="author"
                            placeholder="Author" />
                    </div>
                    <button type="submit" onClick={this.submitForm} className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export { AddBookWrapper, AddBook }
