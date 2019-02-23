import React from 'react';

const containerStyles = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center'
}

const usersStyles = {
    fontSize: 20,
    padding: 20,
    backgroundColor: '#2E86AB',
    width: '40%',
    overflowY: 'scroll'
}

const userStyles = {
    margin: 15,
    border: "1px solid black",
    padding: 15,
    backgroundColor: '#F5F749'
}




class Users extends React.Component {

    state = {
        users: { results: [] }
    }

    fetchUsers() {
        fetch('https://randomuser.me/api/?results=60')
            .then(response => response.json())
            .then(data => {
                this.setState({ users: data })
            })
    }

    componentDidMount() {
        this.fetchUsers();
    }

    render() {
        return (
            <div style={containerStyles}>
                <div style={usersStyles}>
                    {this.state.users.results.map(function (user) {
                        return <div style={userStyles} >{user.name.first} {user.name.last}</div>
                    })}
                </div>
            </div>
        )

    }
}


export default Users;

