import React from 'react'
import '../styles/App.css'
import logo from './assets/images/logo.svg';


export class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Around</h1>
            </header>
        )
    }
}