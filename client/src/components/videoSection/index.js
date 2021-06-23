import React from "react";
import ReactPlayer from 'react-player';

function VideoSection () {
    return (
        <section className="how-to-top">
            <h1 className="how-to-title">How to Use</h1>

                <div className='player-wrapper'>
                <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=aFYsJYPye94'
                height='100%'
                width='100%'
                controls={true}
                />
                </div>
            <h2 className="how-subtitle">Brief Title</h2>

            <p className="how-description">This will be a brief description of the walkthrough video.

            </p>

        </section>
            );
        }

export default VideoSection;