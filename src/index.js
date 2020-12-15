import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CreateAccountForm from './Components/CreateAccountForm'
import NavBar from './Components/NavBar';
import CreateAccountPage from "./Components/CreateAccountPage";
import HomepageHeader from "./Components/HomepageHeader"
import LoginPage from "./Components/LoginPage"

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <LoginPage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
