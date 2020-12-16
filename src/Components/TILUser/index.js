import React from 'react';

class TILUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            learners: []
        }
    }

    componentDidMount() {
        const queryString = `
            query {
                user(username: "delta") {
                    _id
                    email
                    username
                    password
                    bio
                }
            }
            `;

        //fetch one user
        fetch('http://localhost:4005/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({query: queryString})
        }).
        then((response) => {
            console.log('theres json')
            return response.json()
        })
            .then((dataObject) => {
                console.log('inside AllLearners then stmt, value of dataObject.data:  ')
                // console.log(dataObject.data);
                // console.log('before setting state')
                // console.log(this.state.learners)
                this.setState({
                    learners: dataObject.data.user
                })
                // console.log('after setting state')
                // console.log(this.state.learners)
            })
    }

    render() {
        return (

            <div className="userPageContent">
            <h1 className="usernameHeader">@{this.state.learners.username}</h1>
                <div className="bioContentContainer">
                    <h3 className="bioHeader">Bio:</h3>
                    <p className="bioContent">
                        {this.state.learners.bio}
                    </p>
                </div>
            </div>
        )
    }

}

export default TILUser;