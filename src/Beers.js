import React from 'react';
import {Link} from 'react-router-dom';

const containerStyles = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center'
}

const usersStyles = {
    fontSize: 20,
    padding: 20,
    width: '40%',
    overflowY: 'scroll'
}

const userStyles = {
    padding: 15,
    margin: 15,
    backgroundColor: '#C9E3AC',
    color: '#37371F',
    width: "60%",
}

const userBox = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    height: 120
}

const deleteButton = {
    height: 40,
    width: "10%",
    borderRadius: 5,
    backgroundColor: '#EA9010',
    border: "none",
    color: "white",
    fontSize: 15,
    margin: 3
}
const editButton = {
    height: 40,
    width: "100%",
    borderRadius: 5,
    backgroundColor: '#90BE6D',
    border: "none",
    color: "white",
    fontSize: 15,
}

const linkStyle = {
    width: "20%",
    margin: 5
}

const pStyle = {
    fontSize: "12px"
}


class Beers extends React.Component {

    state = {
        beers: []
    }

    fetchBeers() {
        fetch('https://beers-bunkier.firebaseapp.com/api/v1/beers/')
            .then(response => response.json())
            .then(data => {
                const entries = Object.entries(data.beers);
                const dataArray = [];
                entries.forEach(function (element) {
                    const newBeer = {
                        id: element[0],
                        ...element[1]
                    }
                    dataArray.push(newBeer);
                })


                this.setState({ beers: dataArray });
                console.log(dataArray)
            })
    }

    componentDidMount() {
        this.fetchBeers();
    }


    removeBeer =(beerId) => {
        const url = `https://beers-bunkier.firebaseapp.com/api/v1/beers/${beerId}`;
        fetch(url, {
            method: 'DELETE'
        }).then(response => {
            this.fetchBeers();
        });
    }

    handleRemove = (beerId) => {
        this.removeBeer(beerId);
    }

    render() {
        return (
            <div style={containerStyles}>
                <div style={usersStyles}>
                    {this.state.beers.map((beer) => {
                        return <div style={userBox}>
                        <div style={userStyles} >{beer.name} <p style={pStyle}>{beer.description}</p></div>
                        <Link to={`/update/${beer.id}`} style={linkStyle}><button style={editButton}>Edit</button></Link>
                        <button style={deleteButton} onClick={() => this.handleRemove(beer.id)}>x</button>
                        </div>
                    })}
                </div>
            </div>
        )

    }
}


export default Beers;

