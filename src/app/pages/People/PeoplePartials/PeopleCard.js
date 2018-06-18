import React from 'react';

export const PeopleCard = props => {

    const { id, name, aboutShort, lastPostDate, avatarUrl } = props.user;

    const showLastPostTime = () => {
        const now = new Date();
        const unFormatedHours= lastPostDate.getHours();
        const formatedHours = `0${unFormatedHours}`;
        const unFormatedMinutes = lastPostDate.getMinutes();
        const formatedMinutes = `0${unFormatedMinutes}`;

        if(lastPostDate.getDate() === now.getDate() 
        && lastPostDate.getMonth() === now.getMonth()
        && lastPostDate.getFullYear()=== now.getFullYear())
        {
            return `Last update at ${unFormatedHours < 10? formatedHours : unFormatedHours}:${unFormatedMinutes < 10 ? formatedMinutes : unFormatedMinutes}`
        } else {
            return `Last update at ${lastPostDate}`
        }
    }

    return (
        
        <li className="collection-item avatar">
            <img src={ avatarUrl ? avatarUrl : "https://varme-center.se/wp-content/uploads/2016/06/omdome.png"} alt="" className="circle" />
            <span className="title">{name}</span>
            <p>{aboutShort}</p>
            <div className='last-update'>
                <p>{showLastPostTime()}</p>
            </div>
        </li>
    )
}