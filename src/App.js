import React, { useState, useEffect } from 'react';
import Header from './Header';
import User from './User';
import Repositories from './Repositories';
import Loading from './Loading';

export default function App() {

    const [profileData, setProfileData] = useState({});

    useEffect(() => {
        console.log(profileData);
    }, [profileData]);

    return (
        <div>
            <Header setProfileData={setProfileData}/>
            
            {profileData? (

            <main>
                <User profileData={profileData}/> 
                <Repositories profileData={profileData} />
            </main>) : (
                <Loading/>
            )}
        </div>
    )
}
