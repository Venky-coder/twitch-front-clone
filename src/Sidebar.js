import React from 'react';
import  './Sidebar.css';
import Channel from './Channel';


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <h5>FOLLOWING CHANNELS</h5>
                <Channel avatar="data:image/jpeg;base64,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" 
                name="freecodecamp" 
                followers="360" />
                <Channel avatar="https://premiumaddons.b-cdn.net/wp-content/uploads/2018/01/beautiful-woman-smiles.jpg" 
                name="cleverprogrammer" 
                followers="140" />
                <Channel avatar="https://www.wonderslist.com/wp-content/uploads/2013/06/barack-obama-look-alike-wants-privacy-and-bar-mitzvah-gigs.jpg" 
                name="easytutorial" 
                followers="290" />
                <h5>RECOMMENDES CHANNELS</h5>
                <Channel avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" 
                name="cleverprogrammer" 
                followers="140" />
            
                <p classNamee='sidebar__topShowMore'>Show More</p>
            </div>
            <div className="sidebar__bottom">
                <div className="sidebar__bottomContainer">
                    <i className='fas fa-search'></i>
                    <input type="teaxt" placeholder="Search to  add friends"/>    
                </div>    
            </div>        
        </div>
    );
}

export default Sidebar;
