import React from 'react';
import RepoItem from "./RepoItem";

const RepoList = ({repos}) => {
    if(!repos) return <p>Repos is undef</p>

    return (
        <>
            {repos.map((repo, i) => <RepoItem key={repo.id} repo={repo} num={i}/>)}
        </>
    )
}

export default RepoList;