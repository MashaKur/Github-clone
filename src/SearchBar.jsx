import React, {useState} from 'react';
import axios from "axios";
import { useRouteMatch } from 'react-router';

// import './index.css';


export default function SearchBar(props){
    const [username, setUsername] = useState('')
    
    const handleSubmit = event => {
        event.preventDefault()
    
        axios.get(`https://api.github.com/users/${username}`)
        .then(resp => {
        setUsername(resp.data)
            })
    };

    
    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={username}
            onChange={event => setUsername(event.target.value)}
            placeholder="GitHub username"
            required
        />
        <button type="submit">Add card</button>
        </form>
    )
    }