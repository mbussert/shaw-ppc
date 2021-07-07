import React from "react";
import ReactPlayer from 'react-player';

function VideoSection () {
    return (
        <section className="how-to-top">
            <h1 className="how-to-title">Welcome to WallPro How To</h1>

                <div className='player-wrapper'>
                <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=aFYsJYPye94'
                height='100%'
                width='100%'
                controls={true}
                />
                </div>
            <h2 className="how-subtitle">WallPro Video Demo</h2>

            <p className="how-description">WallPro, the calculator tool to ease your purchasing process! 
            <br/>For guidance of use, please watch this short demo video for the best user experience. 
            <br/>Should you have any questions or concerns, contact us. 

            </p>

        </section>
            );
        }

export default VideoSection;