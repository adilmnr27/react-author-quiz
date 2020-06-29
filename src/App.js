import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import AuthorQuiz from './components/AuthorQuiz'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AuthorQuiz header="Author Quiz"></AuthorQuiz>
          Learn React
      </header>
    </div>
  );
}

export default App;
