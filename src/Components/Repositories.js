import React from 'react';
import './Repositories.css';
import noRepo from '../images/noRepo.png';


export default function Repositories(props) {
    if(props?.profileData?.repos?.length !== 0){
          return ( 
        <div>
            <h2 className = "Repo-count">Repositories ({props?.profileData?.repos?.length})</h2>
            {props.profileData.repos && props.profileData.repos.map( item =>
                <div className = "Repo" key={item.id}>
                    <div className = "Repo-card">
                    <a className = "Repo-name" href = {item.html_url} target="_blank" rel="noreferrer">{item.name}</a>
                    <p className = "Description">{item.description}</p> 
                    </div>
                </div>
            )}
        </div>
    );
    } else {
        return(
            <div className="NoRepo">
                <img src = { noRepo } alt = "logo" />
                <p>Repository list is empty</p>
            </div>
        )
    }

  
};

