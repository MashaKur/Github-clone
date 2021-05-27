import React, {useState, useEffect} from 'react';
import {fetchData} from "./api.js";
import './User.css';
import followers from "./images/followers.png";
import following from "./images/following.png";


export default function User() {
    const URL = 'https://api.github.com/users/MashaKur';
    const [card, setCard] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
            setCard(await fetchData(URL))
        }
        fetchAPI();
        console.log(card)
    }, [setCard])


    return ( 
         
            <div className = "Card" key={card.id}>
                <img src = {card.avatar_url}  className = "Foto" alt = "user" />
                <h2 className = "Name">{card.name}</h2>
                <a className = "Nickname" href = {card.html_url} target="_blank">{card.login}</a>
                <div className = "Follow">
                    <img src = {followers} className = "icon1" alt = "followers" />
                    <p className = "Followers">{card.followers} followers</p>
                    <img src = {following} className = "icon2" alt = "following" />
                    <p className = "Following">{card.following} following</p>
                </div>
            </div>
    );
};

