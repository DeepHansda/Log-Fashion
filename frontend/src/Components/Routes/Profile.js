import React from 'react';

function Profile({parseDetails}){
    const {name,email,phone} = parseDetails
    const logOut = ()=>{
        localStorage.removeItem('jwt');
        window.location.reload();
    }

    return(
        <div className="profile" style={{display: 'flex', alignItems: 'center',justifyContent: 'center', height: '100vh'}}>
            <div className="profile-box">
                <div className="profile-header"><h2>Profile</h2></div>
                <div className="profile-user">




                <div className="profile-name profile-det">
                    <p>name : <span>{name}</span></p>
                </div>

                <div className="profile-email profile-det">
                    <p>email : <span>{email}</span></p>
                </div>

                <div className="profile-number profile-det">
                    <p>phone number : <span>{phone}</span></p>
                </div>



                </div>
                <div className="profile-logout-button">
                <button className="logOut-button" onClick={logOut}>Log out</button>
                </div>
            </div>
        </div>
    )
}

export default Profile;