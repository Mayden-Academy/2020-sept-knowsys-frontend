import React from 'react';
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
        console.log(props);
        //this gets the exsiting name, which was set by the prev logged in user!
        //check token - why is props still undefined??
        // console.log("access_token", this.props.location.state.userToken);
        // state: { userToken: localStorage.getItem('access_token') }


        let usernameX = localStorage.getItem('username') ;
        console.log(`localStorage on TILUser usernameX is: ${usernameX}`);
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
            console.log('theres json')
            return response.json()
        })
            .then((dataObject) => {
                console.log('inside AllLearners then stmt, value of dataObject.data:  ')
                //need to verify token when getting  user out of api, in api repo!
                //jwt.verify(token)

                console.log(dataObject.data);
                // console.log('before setting state')
                // console.log(this.state.learners)
                this.setState({
                    learners: dataObject.data.user,
                    usernameState: usernameX,
                    bioState: dataObject.data.user.bio
                })
                console.log('after setting state and before bio')
                console.log(this.state.learners.bio)
                console.log('before this.props ')
                console.log(this.props)
            })
    }

    render() {

        return (

                    <div className="bodyContent">
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

export default TILUser;