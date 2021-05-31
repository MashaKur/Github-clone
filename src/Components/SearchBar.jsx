import React, {useState, useEffect} from 'react';
import axios from "axios";
import './Header.css';

export default function SearchBar(props){
    const [name, setName] = useState('');
    // const [page, setPage] = useState('')

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
        e.preventDefault()
          axios.get(`https://api.github.com/users/${name}`)
        .then(data => {
            props.setProfileData(data.data);
            return data.data 
        })
        .catch((dt) => {
            console.log('daonovnodsvn')
            console.log(dt.response.status)
            props.setProfileData(dt.response.status);
        })
        .then((info)=>{
            axios.get(`https://api.github.com/users/${name}/repos?page=${page}&per_page=4`)
            .then(res => {
                props.setProfileData({
                    ...info,
                    repos: res.data,
                });
            });
        }); 
                 
    };

    
    return (
        <form className="Search"  >
            <span className = "Icon" ><i className = "fa fa-search"></i></span >
            <input value={name} type="text" placeholder="Enter GitHub username" onChange={(e)=> setName(e.target.value)}  />
            <button onClick={handleSubmit} ></button>
        </form>  
    )
    }