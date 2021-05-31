import React, { useState, useEffect } from 'react';
import Header from './Header';
import User from './User';
import Repositories from './Repositories';
import Loading from './Loading';
import userNotFound from '../images/userNotFound.png';
import './App.css'

export default function App() {

    const [profileData, setProfileData] = useState({});

    if (profileData==404){
        return(
            <div>
                 <Header setProfileData={setProfileData}/>
                <div className="userNotFound">
                    <img src = { userNotFound } alt = "userNotFound"/>
                    <p>User not found</p>
                </div>
            </div>
            
        )
    }else {
          return (
        <div>
            <Header setProfileData={setProfileData}/>
            <div>
                {profileData? (
                <main>
                    <User profileData={profileData}/> 
                    <Repositories profileData={profileData} />
                </main>) : (
                    <Loading/>
                )}
            </div>  
        </div>
    )
    }
}
