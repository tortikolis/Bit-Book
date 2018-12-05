import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PeopleList } from './PeoplePartials/PeopleList';
import { SearchPeople } from './PeoplePartials/SearchPeople';
import { getAllUsers } from '../../../services/userService';
import { getAllUsersAction, changeSearchValueAction } from '../../../state/actions/peopleActions';

class PeoplePage extends Component {

    filterUsers = (users, searchValue) => {
        return users.filter((user) => {
            return user.name.toLowerCase().includes(searchValue);
        })
    }

    componentDidMount() {
        this.props.getPeopleData();
    }

    render() {
        const { users, searchValue } = this.props;
        const filteredUsers = this.filterUsers(users, searchValue)
        return (
            <div className='container' id='people'>
                <SearchPeople onSearchHandler={this.props.changeSearchValue} />
                <PeopleList users={filteredUsers} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.people.users,
        searchValue: state.people.searchValue
    }
}

const mapDispatchToProps = dispatch => {
    return {
      getPeopleData: () => { dispatch(getAllUsersAction()) },
      changeSearchValue: event => { dispatch(changeSearchValueAction(event.target.value)) },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PeoplePage);