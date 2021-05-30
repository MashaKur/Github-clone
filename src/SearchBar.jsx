import React, {useState, useEffect, useRef} from 'react';
import axios from "axios";
import './Header.css';

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
        // return (
        //     <div>
        //         введите имя пользователя 
        //     </div>
        // )
    }, []);

    const handleSubmit = e => {
        e.preventDefault()
        
        // if (e.keyCode === 13) {
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
        // }
        
    };

    
    return (
        <form className="Search" >
            <span className = "Icon" ><i className = "fa fa-search"></i></span >
            <input value={name} type="text" placeholder="Enter GitHub username" onChange={(e)=> setName(e.target.value)}  />
            <button onClick={handleSubmit} >button</button>
        </form>  
    )
    }