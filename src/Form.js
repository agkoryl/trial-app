import React from 'react';


const formContainer = {
    margin: 20,
}

const inputStyle = {
    margin: 10,
    width: 300,
    fontSize: 30,
    padding: 5
}

const buttonStyle = {
    color: 'white',
    backgroundColor: '#90BE6D',
    borderRadius: 7,
    fontSize: 20,
    padding: 15,
    border: 'none',
    margin: 10
}

class Form extends React.Component {

    state = {
        name: '',
        description: '',
        imageUrl: ''
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleAdd = () => {
        const beerId = this.props.match.params.beerId;
        if (beerId) {
            fetch(`https://beers-bunkier.firebaseapp.com/api/v1/beers/${beerId}`, {
            method: 'PATCH',
            body: JSON.stringify(this.state)
        });
        } else {
            fetch('https://beers-bunkier.firebaseapp.com/api/v1/beers/', {
                method: 'POST',
                body: JSON.stringify(this.state)
            });
        }
    }

    componentDidMount() {
        const beerId = this.props.match.params.beerId;
        if (this.props.match.params.beerId) {
            fetch(`https://beers-bunkier.firebaseapp.com/api/v1/beers/${beerId}`)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        name: data.name,
                        description: data.description,
                        imageUrl: data.imageUrl
                    })
                });
        }

    }


    render() {
        return (
            <div style={formContainer}>
                <h2>Add a new item</h2>
                <input style={inputStyle} type="text" placeholder="enter beer name" name="name" defaultValue={this.state.name} onChange={this.handleChange}></input>
                <input style={inputStyle} type="text" placeholder="describe it" name="description" defaultValue={this.state.description} onChange={this.handleChange}></input>
                <input style={inputStyle} type="text" placeholder="give image url" name="imageUrl" defaultValue={this.state.imageUrl} onChange={this.handleChange}></input>
                <button style={buttonStyle} onClick={this.handleAdd}>ADD</button>
            </div>

        )
    }
}


export default Form;