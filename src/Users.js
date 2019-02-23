import React from 'react';

const containerStyles = {
    fontSize: 40,
    padding: 20
}

const userStyles = {
    margin: 15,
}


class Users extends React.Component {

    state = {
        users: {results: []}
    }

    fetchUsers() {
        fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => {
            this.setState({users: data})
        })
    }
 
    componentDidMount() {
       this.fetchUsers();
      }

    render() {
        return (
            <div style={containerStyles}>
                {this.state.users.results.map(function (user) {
                    return <div style={userStyles}>{user.name.first} {user.name.last}</div>
                })}
            </div>
        )
    }
}


export default Users;

