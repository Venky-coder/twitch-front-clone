import React from 'react'
import './RecentItem.css'

const RecentItem = ({ url , title}) => {
    return (
        <div className="item">
            
                    <iframe 
                    width="400" 
                    height="400" 
                    title="Item"
                    src={url} 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
                    <div className="item__details">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtuIaJvqT7WGVtoi9k08Nw56mwta556BMCPg&usqp=CAU" alt="avatar"/>
                        <div className="item__detailsText">
                            <h4>{title}</h4>
                            <p>cleverprogrammer</p>
                            <p>Science & Technology</p>
                        </div>
                    </div>
        </div>
    )
}

export default RecentItem
