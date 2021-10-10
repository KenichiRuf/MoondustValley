import React, {useState} from 'react';
import {Button} from 'reactstrap';

const FounderSkill = props => {

    const [level, setLevel] = useState(0)

    const levelUp = () => {
        if(props.moondust >= props.cost*(level+1)) {
            setLevel(level + 1)
            props.setMoondust(props.moondust-props.cost*(level+1))
        }
    }

    return(
        <div className="founder-skill">
            <div className="founder-skill-info">
                <h1>{props.name}</h1>
                <p>Level: {level}</p>
                <p>Upgrade Cost: {level < 4 ? props.cost*(level+1) : "Max Level"}</p>
            </div>
            {level < 4 ? <Button className="level-up-button" onClick={levelUp}>Level Up</Button> : null}
        </div>
    )
}

export default FounderSkill;