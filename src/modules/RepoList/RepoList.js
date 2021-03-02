import React from 'react';
import RepoItem from "./RepoItem";
import s from './RepoList.module.css'

const RepoList = ({repos}) => {
    if(!repos) return <p>Repos is undef</p>

    return (
        <main className={s.container}>
            {repos.map((repo, i) => <RepoItem key={repo.id} repo={repo} num={i}/>)}
        </main>
    )
}

export default RepoList;