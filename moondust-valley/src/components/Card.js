import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../ItemTypes';

const Card = props => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.Card,
        item: { name: props.card.name },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                alert(`You dropped ${item.name} into ${dropResult.name}!`);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }));

    return(
        <div className="card" ref={drag} data-testid={`card-${props.card.name}`}>
            <p className="card-name">{props.card.name}</p>
            <img src={props.card.image} className="card-image" alt={props.card.name}/>
            <p className="card-text">{props.card.text}</p>
        </div>
    )
}

export default Card;