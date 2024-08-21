import React from 'react';
import '../styles/Instagram.css'; // Import the CSS file

// eslint-disable-next-line react/prop-types
const Instagram = ({ postUrl }) => {
    return (
        <div className="instagram-container">
            <div className="instagram-card">
                <iframe
                    src={`https://www.instagram.com/p/${postUrl}/embed`}
                    width="100%"
                    height="600"
                    frameBorder="0"
                    scrolling="no"
                    // eslint-disable-next-line react/no-unknown-property
                    allowTransparency="true"
                    allow="encrypted-media"
                    title="Instagram Post"
                ></iframe>
            </div>
        </div>
    );
};

export default Instagram;
