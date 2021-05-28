import React, {useState, useEffect, useRef} from 'react';
import axios from "axios";
// import User from './User';
// import Repositories from './Repositories';



export default function SearchBar(props){
    const [name, setName] = useState('');

    useEffect(() => {
        axios.get(`https://api.github.com/users/MashaKur`)
        .then(data => {
            props.setProfileData(data.data);
            return data.data
        })
        .then((info)=>{
            axios.get(`https://api.github.com/users/MashaKur/repos`)
            .then(res => {
                props.setProfileData({
                    ...info,
                    repos: res.data,
                });
            })
        })
    }, []);

    const handleSubmit = e => {
        // event.preventDefault()
        
        axios.get(`https://api.github.com/users/${name}`)
        .then(data => {
            props.setProfileData(data.data);
            return data.data
        })
        .then((info)=>{
            axios.get(`https://api.github.com/users/${name}/repos`)
            .then(res => {
                props.setProfileData({
                    ...info,
                    repos: res.data,
                });
            });
        });
    };

    
    return (
        <div>
            <input value={name} type="text" onChange={(e)=> setName(e.target.value)} />
            <button onClick={handleSubmit} >button</button>
        </div>  
    )
    }