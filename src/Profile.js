import React from 'react'
import './Profile.css'
import RecentItem from './RecentItem'

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__topLeft">
                <img src="https://premiumaddons.b-cdn.net/wp-content/uploads/2018/01/beautiful-woman-smiles.jpg" alt="logo" />
                <div className="profile__topLeftDetails">
                    <h1>cleverprogrammer</h1>
                    <h3>240 followers</h3>
                </div>
            </div>
            <div className="profile__topRight">
                <i className="fas fa-heart graybg" />
                <i className="fas fa-bell graybg" />
                <i className="fas fa-ellipsis-v" />
            </div>
            <div className="profile__menu">
                <h2 className="active">Home</h2>
                <h2>About</h2>
                <h2>Schedule</h2>
                <h2>Videos</h2>
                <h2><i className="fas fa-arrow-up"></i></h2>
                <h2>Chat</h2>
            </div>

            <div className="profile__recent">
                <h2>Recent Broadcasts</h2>
                <div className="profile_recentItems">
                    <RecentItem 
                    url={'https://www.youtube.com/embed/gLNIVdtaW3A'}
                    title={'Lets Build Twitch Clone fr Beginners with React'}
                    />
                    <RecentItem 
                    url={'https://www.youtube.com/embed/EvDiuLvx2Fk'}
                    title={'Lets Build Twitch Clone fr Beginners with React'}
                    />
                    <RecentItem 
                    url={'https://www.youtube.com/embed/m9oSZo-TvFI'}
                    title={'Lets Build Twitch Clone fr Beginners with React'}
                    />
                    <RecentItem 
                    url={'https://www.youtube.com/embed/bjQPxuSUAc4'}
                    title={'Lets Build Twitch Clone fr Beginners with React'}
                    />
                </div>

                <div className="profile__categories">
                    <h2>cleverprogrammer's recent streamed categories</h2>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtuIaJvqT7WGVtoi9k08Nw56mwta556BMCPg&usqp=CAU"
                    alt="Science & Technology"/>
                </div>
            </div>
        </div>
    )
}

export default Profile
