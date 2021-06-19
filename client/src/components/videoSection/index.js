import React from "react";
import ReactPlayer from 'react-player';

function VideoSection () {
    return (
        <section>
            <h1>How to Use</h1>
                <div className='player-wrapper'>
                <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=aFYsJYPye94'
                width='100%'
                height='100%'
                controls={true}
                />
            </div>
            <h2>Brief Title</h2>
            <p>This will be a brief description of the walkthrough video.</p>

        </section>
            );
        }

export default VideoSection;