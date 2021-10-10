import React from 'react';
import Board from '../components/Board';
import Player from '../components/Player';
import {DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Tutorial = props => {
    return(
        <DndProvider backend={HTML5Backend}>
            <div>
                <Board />
                <Player />
            </div>
        </DndProvider>
    )
}

export default Tutorial;