import React from 'react';
import {Link} from 'react-router-dom';

const HomeScreen = () => {
    return(
        <div>
            <h1>Welcome to Moondust Valley</h1>
            <Link to="/deck-builder">Build Your Decks</Link>
            <Link to="/tutorial">Launch Tutorial</Link>
            <Link to="">Play</Link>
        </div>
    )
}

export default HomeScreen;