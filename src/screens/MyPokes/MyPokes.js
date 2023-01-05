import React from 'react'
// import { Button, Card, Accordion,Badge } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import MainScreen from '../../components/MainScreen';
import { App } from '../../components/Poke';
// import notes, { } from "../../data/notes";


const MyPokes = () => {
    return (
        <MainScreen title='Welcome Back...'>
            <div className="App">
                <App/>
            </div>
    </MainScreen>
        
);
};

export default MyPokes;