import React, {Component} from 'react';
import { PeopleList } from './PeoplePartials/PeopleList';
import { SearchPeople } from './PeoplePartials/SearchPeople';
import { getAllUsers } from '../../../services/userService';

export class PeoplePage extends Component {
    constructor(props){
        super(props)

        this.state = {
            users: [],
            searchValue: ''
        }
    }

    getPeopleData = () => {
        getAllUsers()
        .then((users) => {
            this.setState({ users: users })
        })
    }

    changeSearchValue = (event) => {
        this.setState({searchValue : event.target.value})
    }

    filterUsers = (users, searchValue) => {
        return users.filter((user) => {
            return user.name.includes(searchValue);
        })
    }

    componentDidMount(){
        this.getPeopleData();
    }

    render(){
        const { users, searchValue } = this.state;
        return(
            <div className='container' id='people'>
                <SearchPeople onSearchHandler={this.changeSearchValue}/>
                <PeopleList users={this.filterUsers(users, searchValue)} />
            </div>
        )
    }
}