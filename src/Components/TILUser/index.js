import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import  UserContext from "../../UserContext";

class TILUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentToken: props.accessToken,
            learners: [],
            usernameState: ""
        }
    }

    //try to pass props in from prev LoginPage,  but its undefined
    componentDidMount(props) {
        //this gets the exsiting name, which was set by the prev logged in user!
        //check token - why is props still undefined??
        // state: { userToken: localStorage.getItem('access_token') }

        if (localStorage.getItem('username')==null || (localStorage.getItem('access_token')==null)) {
            //redirecet to /home

            return <Redirect to="/login" />

        }

        let usernameX = localStorage.getItem('username') ;
        const queryString = `
            query {
                user(username: "${usernameX}") {
                    _id
                    email
                    username
                    password
                    bio
                    access_token
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
            return response.json()
        })
            .then((dataObject) => {
                //need to verify token when getting  user out of api, in api repo!
                //jwt.verify(token)

                this.setState({
                    learners: dataObject.data.user,
                    usernameState: usernameX,
                    bioState: dataObject.data.user.bio
                })
            })
    }

    render() {
        if (localStorage.getItem('username')==null) {
            //redirecet to /home
            return (<Redirect to="/login" />)

        }
        else {
            return (
            <div className="userPageContent">
                <h1 className="usernameHeader">@{this.state.usernameState}</h1>
                {/*<h1 className="usernameHeader">@{this.state.learners.username}</h1>*/}
                <div className="bioContentContainer">
                    <h3 className="bioHeader">Bio:</h3>
                    <p className="bioContent">
                        {/*    {this.state.learners.bio}*/}
                        {this.state.bioState}
                    </p>
                </div>
            </div>
            )
        }
    }

}

export default TILUser;