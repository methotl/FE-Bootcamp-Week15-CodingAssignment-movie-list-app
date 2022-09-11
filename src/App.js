import React from 'react';
import MovieForm from './Component/MovieForm';
import MovieList from './Component/MovieList';
import './App.css';
import UpdateForm from './Component/UpdateForm';

function App() {
    return (
        <div className="App">
            <MovieForm/>
            <br></br>
            <MovieList/>
            <UpdateForm/>
        </div>
    );

}

export default App;

