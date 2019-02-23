import React from 'react';

const styles = {
    fontSize: 40,
    padding: 20
}


class Users extends React.Component {

    users = [
        {
            name: 'John',
            surname: 'Ble'
        },
        {
            name: 'Jane',
            surname: 'Yellow'
        }
    ]
        ;
 
    render() {
        return (
            <div style={styles}>
                {this.users.map(function (user) {
                    return <div>{user.name} {user.surname}</div>
                })}
            </div>
        )
    }
}


export default Users;
