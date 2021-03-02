import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './modules/Header/Header';
import UserInfo from "./modules/UserInfo/UserInfo";
import RepoList from "./modules/RepoList/RepoList";

class App extends Component {

    state = {
        userData: null,
        repos: null
    }

    setUserData = (userData) => this.setState({userData})

    setRepos = (repos) => this.setState({repos})

    render() {
        if (!this.state.userData) return (
            <>
                <Header setRepos={this.setRepos} setUserData={this.setUserData}/>
                <div>Input login of user</div>
            </>
        );

        return (
            <>
                <Header setRepos={this.setRepos} setUserData={this.setUserData}/>
                <UserInfo user={this.state.userData}/>
                <RepoList repos={this.state.repos}/>
            </>
        );
    }
}

export default App;
