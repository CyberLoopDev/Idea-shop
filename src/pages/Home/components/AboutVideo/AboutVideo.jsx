import React from 'react';
import './AboutVideo.css';

const AboutVideo = () => {
    
    const videoUrl = "https://static.insales-cdn.com/files/1/4624/24875536/original/Untitled.mp4";

    return (
        <>
            <section className="about-video-section">
                
                    <h2 className="section-title">О нас</h2>
                    
                    <div className="video-wrapper">
                        <video 
                            src={videoUrl} 
                            controls 
                            width="1060">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                
            </section>

           
        </>
    );
};

export default AboutVideo;