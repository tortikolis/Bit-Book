import React from 'react';
import { PeopleCard } from './PeopleCard';
import { NoUserMessage } from './NoUsersMessage';

export const PeopleList = props => {

    const userLength = props.users.length > 0;
    const mapUsers = props.users.map((user, key) => {
        return <PeopleCard user={user} key={key} />
    })

    return (
        <ul className="collection">
            {userLength ?
                mapUsers
                : <NoUserMessage />
            }
        </ul>
    )
}