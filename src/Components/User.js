import React, {useState, useEffect} from 'react';
import './User.css';
import followers from "../images/followers.png";
import following from "../images/following.png";

export default function User(props) {
 
    return (     
            <div className = "Card" >
                <img src = {props.profileData.avatar_url}  className = "Foto" alt = "user" />
                <h2 className = "Name">{props.profileData.name}</h2>
                <a className = "Nickname" href = {props.profileData.html_url} target="_blank" rel="noreferrer">{props.profileData.login}</a>
                <div className = "Follow">
                    <img src = {followers} className = "icon1" alt = "followers" />
                    <p className = "Followers">{props.profileData.followers} followers</p>
                    <img src = {following} className = "icon2" alt = "following" />
                    <p className = "Following">{props.profileData.following} following</p>
                </div>
            </div>
            );    
};

