import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CreateAccountForm from './Components/CreateAccountForm'
import NavBar from './Components/NavBar';
import CreateAccountPage from "./Components/CreateAccountPage";
import HomepageHeader from "./Components/HomepageHeader"
import UserPage from "./Components/UserPage"
import LoginPage from "./Components/LoginPage";

import { Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';

class Routing extends React.Component {
    render() {
        return (
            <Router>
                <div className="mainBodyContainer">
                    {/*must  have  nav here*/}
                    <NavBar />

                    <Switch>
                        {/*<Route path="/" exact component={ LoginPage } />*/}
                        <Route path="/login" component={ LoginPage } />
                        <Route path="/user" exact component={ UserPage } />
                        <Route path="/createaccount" exact component={ CreateAccountPage } />
                        {/*<Route component={NotFound} />*/}
                    </Switch>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(
  <React.StrictMode>
      <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
