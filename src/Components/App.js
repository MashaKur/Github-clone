import React, { useState, useEffect } from 'react';
import Header from './Header';
import User from './User';
import Repositories from './Repositories';
import Loading from './Loading';

export default function App() {

    const [profileData, setProfileData] = useState({});
    // useEffect(() => {
    //     console.log(profileData);
    // }, [profileData]);
    console.log('grmgerg')
    console.log(profileData);

    if (profileData==404){
        return(
            <div>
                 <Header setProfileData={setProfileData}/>
                <div>пользователь не найден</div>
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
