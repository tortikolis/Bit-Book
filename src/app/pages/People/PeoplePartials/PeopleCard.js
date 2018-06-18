import React from 'react';

export const PeopleCard = props => {

    const { id, name, aboutShort, lastPostDate, avatarUrl } = props.user;
    const placeholderImg = "https://varme-center.se/wp-content/uploads/2016/06/omdome.png";

    const showLastPostTime = () => {
        const now = new Date();
        const unFormatedHours = lastPostDate.getHours();
        const formatedHours = `0${unFormatedHours}`;
        const unFormatedMinutes = lastPostDate.getMinutes();
        const formatedMinutes = `0${unFormatedMinutes}`;
        const formatedTime = `${unFormatedHours < 10 ? formatedHours : unFormatedHours}:${unFormatedMinutes < 10 ? formatedMinutes : unFormatedMinutes}`;
        const formatedDate = `${lastPostDate.getDate()}.${lastPostDate.getMonth() + 1}.${lastPostDate.getFullYear()} at ${formatedTime}`

        if (lastPostDate.getDate() === now.getDate()
            && lastPostDate.getMonth() === now.getMonth()
            && lastPostDate.getFullYear() === now.getFullYear()) {
            return `Last update at ${formatedTime}`
        } else {
            return `Last update ${formatedDate}`
        }
    }

    return (

        <li className="collection-item avatar" id='user-item'>
            <img src={avatarUrl ? avatarUrl : placeholderImg} alt="" className="circle" />
            <span className="title">{name}</span>
            <p className="about">{aboutShort}</p>
            <div className='last-update'>
                <p>{showLastPostTime()}</p>
            </div>
        </li>
    )
}