import React, { useState, useRef } from 'react';
import '../styles/MusicPlayer.css';
import musicPic from '../assets/img/bepimusic.jpg'
import music from '../assets/Music/Y2meta.app - Bepi - Hau Ho O _ Official Music Video (128 kbps).mp3'
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="music-player-container">
            <img src={musicPic} alt="Artist" className="artist-image" />
            <div className="music-info">
                <span className="music-title">Bepi - Hau Ho O</span>
                <button className="play-button" onClick={handlePlayPause}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
            </div>
            <audio ref={audioRef} src={music} />
        </div>
    );
}

export default MusicPlayer;
