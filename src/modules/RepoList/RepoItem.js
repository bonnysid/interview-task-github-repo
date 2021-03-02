import React from 'react';
import s from './RepoList.module.css'
import SvgIcon from "../SvgIcon/SvgIcon";

const RepoItem = ({repo}) => {
    return (
        <div className={`block ${s.item}`}>
            <h1 className={s.name}>{repo.name}</h1>
            <div className={s.repoInfo}>
                <SvgIcon title={'size'} value={repo.size} id={'size'}/>
                <SvgIcon title={'forks'} value={repo.forks} id={'fork'}/>
                <SvgIcon title={'watchers'} value={repo.watchers} id={'watchers'}/>
            </div>
        </div>
    )
}

export default RepoItem