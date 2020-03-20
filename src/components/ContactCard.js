import React from 'react';
import figure from '../Assets/person.png';

export default function ContactCard(props) {
    return(
        <div>
            <img className="figure" src={figure} alt="person icon placeholder"/>
            <p class="bold">{props.firstName} {props.lastName}</p>
            <p>{props.jobTitle}</p>
            <p>{props.emailAddress}</p>
        </div>    
    );
}


