import React, {useState} from 'react';
import Card from './Card';
import Zombie from '../assets/Zombie.jpg';
import Ape from '../assets/Ape.jpg';
import Alien from '../assets/Alien.jpg';
import FounderSkill from '../components/FounderSkill';

const Player = props => {

    const [moondust, setMoondust] = useState(200)
    const [skills, setSkills] = useState([
        {
            name: "Intermittent Fasting",
            cost: 20
        },
        {
            name: "Yoga",
            cost: 20
        }
    ])

    let hand = [
        {
            name: "Astronaut Zombie",
            text: "Will Light Your Ass On Fire",
            image: Zombie,
            cost: 100
        },
        {
            name: "Astronaut Zombie",
            text: "Will Light Your Ass On Fire",
            image: Zombie,
            cost: 100
        },
        {
            name: "Business Ape",
            text: "Check Your Pockets",
            image: Ape,
            cost: 20
        }
    ]

    return(
        <div className="player">
            <div className="player-founder">
                <img src={Alien} className="player-founder-image"/>
                <div className="player-founder-info">
                    <p>Moondust: {moondust}</p>
                    <div className="player-founder-skills">
                        {skills.map(skill => <FounderSkill name={skill.name} cost={skill.cost} moondust={moondust} setMoondust={setMoondust}/>)}  
                    </div>
                </div>
            </div>
            <div className="player-hand">
                {hand.map(card => <Card card={card}/>)}
            </div>
        </div>
    )
}

export default Player;