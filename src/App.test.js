import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import AuthorQuiz from './components/AuthorQuiz';


/* Below is the basic test function provided by facebook when we create the app*/
/* Below meaning of the sentences have been added from link 
https://stackoverflow.com/questions/60746698/basic-create-react-app-jest-test-explained
*/
/* For more testing I think the following article will provide some help
https://medium.com/@antonybudianto/react-testing-with-react-testing-library-3b8554f6acfd
*/
test('renders learn react link', () => {
  /* destructuring is used to get the function getByText.
   The render function actually returns an object containing a number of functions 
   that let you inspect the virtual DOM nodes rendered by React.
   */
  const { getByText } = render(<App />);

  /*this is used to check if the text “learn react” is contained anywhere in the virtual 
  DOM rendered by the <App /> component.*/
  const linkElement = getByText(/learn react/i);

   /*The method toBeInTheDocument of Jest's expect function here is actually provided by another
   library that sits on top of React Testing Library, jest-dom.*/
  expect(linkElement).toBeInTheDocument();
});




/*----------------Test Methods For Author Quiz Component--------------------------------- */

/* The below test was descibed in the first testing session */
describe("Author Quiz", ()=>{
  it("Renders Without crashing",()=>{
    let div = document.createElement("div");
    ReactDOM.render(<AuthorQuiz />, div);
  })
})


/* Creating a different testing function similiar to the one provided by react*/
test('Author Quiz Has The Word', () => {
  const { getByText } = render(<AuthorQuiz header="ABC" />); 
  const linkElement = getByText("ABC");
  expect(linkElement).toBeInTheDocument();
});

/*----------------End of Author Quiz Component Test------------------------------------------*/


