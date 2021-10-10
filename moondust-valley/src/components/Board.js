import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../ItemTypes';

const style = {
    height: '55vh',
    width: '100%',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
};

const Board = () => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.Card,
        drop: () => ({ name: 'Board' }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));
    const isActive = canDrop && isOver;
    let backgroundColor = '#222';
    if (isActive) {
        backgroundColor = 'darkgreen';
    }
    else if (canDrop) {
        backgroundColor = 'darkkhaki';
    }

    return(
        <div ref={drop} style={{ ...style, backgroundColor }}>
            <p>Board</p>
        </div>
    )
}

export default Board;