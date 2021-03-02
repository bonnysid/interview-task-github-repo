import React, {Component} from 'react';
import nullstyle from './nullstyle.css';
import './App.css';
import Header from './modules/Header/Header';
import UserInfo from "./modules/UserInfo/UserInfo";
import RepoList from "./modules/RepoList/RepoList";
import StartPage from "./modules/StartPage/StartPage";

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
                <StartPage/>
            </>
        );

        return (
            <div className='app-wrapper'>
                <Header setRepos={this.setRepos} setUserData={this.setUserData}/>
                <UserInfo user={this.state.userData}/>
                <RepoList repos={this.state.repos}/>
            </div>
        );
    }
}

export default App;
