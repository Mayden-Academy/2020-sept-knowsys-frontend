import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CreateAccountForm from './Components/CreateAccountForm'
import NavBar from './Components/NavBar';
import CreateAccountPage from "./Components/CreateAccountPage";
import HomepageHeader from "./Components/HomepageHeader"
import UserPage from "./Components/UserPage"
import LoginPage from "./Components/LoginPage";
import NotFound from './Components/NotFound'

import UserContext from "./UserContext";

import { Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';

class Routing extends React.Component {
    render() {
        return (
                <Router>
                    <div>
                        {/*must  have  nav here*/}
                        <Switch>
                            <Route path="/" exact component={ LoginPage } />
                            <Route path="/login" component={ LoginPage } />
                            <Route path="/user"  render={(props) =>  <UserPage {...props}/>} />
                            {/*// <Route path="/user" exact component={ UserPage } />*/}
                            <Route path="/register" exact component={ CreateAccountPage } />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </Router>

        )
    }
}

ReactDOM.render(
  <React.StrictMode>
      <UserContext.Provider>
          {/*<UserContext.Provider value={{*/}
          {/*    user: this.state.learners*/}
          {/*}}>*/}
          <NavBar />
          <Routing />
        {/*<NavBar />*/}
        {/*<LoginPage />*/}
        {/*<UserPage />*/}
      </UserContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
