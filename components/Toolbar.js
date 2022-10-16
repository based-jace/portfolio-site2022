import {useEffect, useRef, useState} from "react";
import clsx from "clsx";
import MuteButton from "./MuteButton";

export default function Toolbar({muted, setMuted}){
    const audioRef = useRef(null);

    useEffect(()=>{
        if(audioRef !== null){
            audioRef.current.volume = 0.15;
        }
    }, [audioRef])

    function muteClick(){
        setMuted(!muted);
        audioRef.current.play();  // Because Chrome sucks
    }
    return <div className="toolbar">
        <iframe src="https://olafwempe.com/mp3/silence/silence.mp3" allow="autoplay" id="audio" style={{display: "none"}}></iframe>
        <audio loop={true} muted={muted} autoPlay={true} ref={audioRef}>
            <source src="demo-website-tune-wip.wav" type="audio/wav"/>
        </audio>
        <div className="tool-container">
            <MuteButton muted={muted} muteClick={muteClick}/>
        </div>
    </div>
}