import React from 'react';

const RepoItem = ({repo, num}) => {
    return (
        <div>
            <h1>{`Repo ${num}`}</h1>
            <h2>{repo.name}</h2>
        </div>
    )
}

export default RepoItem