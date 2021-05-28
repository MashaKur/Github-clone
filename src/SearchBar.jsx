import React, {useState} from 'react';
import axios from "axios";
// import User from './User';
// import Repositories from './Repositories';



export default function SearchBar(){
    const [username, setUsername] = useState('')
    
    const handleSubmit = event => {
        event.preventDefault()
    
        axios.get(`https://api.github.com/users/${username}`)
        .then(resp => {
        setUsername(resp.data)
            })
    };

    
    return (
        
        <input
            type="text"
            value={username}
            onChange={handleSubmit
                // event => setUsername(event.target.value)
            }
            placeholder="GitHub username"
        />
       
        
        
    )
    }