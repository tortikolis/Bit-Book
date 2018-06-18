import React from 'react';
import { PeopleCard } from './PeopleCard';
import { NoUserMessage } from './NoUsersMessage';

export const PeopleList = props => {

    return (
        <ul className="collection">
           { props.users.length > 0 ?
            props.users.map((user, key) => {
               return <PeopleCard user={user} key={key}/>
            })
            : <NoUserMessage />
            }
        </ul>
    )
}