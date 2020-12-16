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
                <div>
                    {/*must  have  nav here*/}

                    <Switch>
                        {/*<Route path="/" exact component={ LoginPage } />*/}
                        <Route path="/login" component={ LoginPage } />
                        <Route path="/user" exact component={ UserPage } />
                        {/*<Route component={NotFound} />*/}
                    </Switch>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(
  <React.StrictMode>
      <NavBar />
      <Routing />
    {/*<NavBar />*/}
    {/*<LoginPage />*/}
    {/*<UserPage />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
