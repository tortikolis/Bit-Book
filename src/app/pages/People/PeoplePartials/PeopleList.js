import React from 'react';
import { PeopleCard } from './PeopleCard';

export const PeopleList = props => {

    return (
        <ul className="collection">
           {props.users.map((user, key) => {
               return <PeopleCard user={user} key={key}/>
           })}
        </ul>
    )
}