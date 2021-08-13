import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EditPage from './pages/EditPage';
import CreatePage from './pages/CreatePage';
import Navigation from './components/Navigation';
import './App.scss';

function App() {
    const [editedExercise, setEditedExercise] = useState(null);

    return (
        <div className="app">
            <Router>
                <Navigation/>
                <Route path="/" exact>
                    <HomePage setEditedExercise={ setEditedExercise }/>
                </Route>
                <Route path="/create">
                    <CreatePage/>
                </Route>
                <Route path="/edit">
                    <EditPage editedExercise={ editedExercise }/>
                </Route>
            </Router>
        </div>
    );
}

export default App;
