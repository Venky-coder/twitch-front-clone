import React from 'react'
import './Stream.css'

const Stream = () => {
    return (
        <div className="stream">
            <div className="stream__container">
                <div className="stream__status">
                    <div className="stream__statusContainer">
                        <div className="stream__statusContainerTop">
                            <div className="stream__statusIndicator">OFFLINE</div>
                            <h2>Check out the below stream from clever programmer</h2>
                        </div>
                        <div className="stream__statusInfo">
                            <i className="fas fa-bell"></i>
                            <p>you will be notified when cleverprogrammer is live</p>
                        </div>
                    </div>
                </div>
                <div className="stream__videoEmbed">
                <iframe 
                width="500" 
                title="stream"
                height="299" 
                src="https://www.youtube.com/embed/dp8PhLsUcFE" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Stream
