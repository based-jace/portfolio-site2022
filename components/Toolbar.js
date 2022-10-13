import {useEffect, useRef, useState} from "react";
import clsx from "clsx";

export default function Toolbar({muted, setMuted}){
    const audioRef = useRef(null);

    useEffect(()=>{
        if(audioRef !== null){
            audioRef.current.volume = 0.15;
        }
    }, [audioRef])

    function muteClick(){
        setMuted(!muted);
    }
    return <div className="toolbar">
        <audio loop={true} autoPlay muted={muted} ref={audioRef}>
            <source src="demo-website-tune-wip.wav" type="audio/wav"/>
        </audio>
        <div className="tool-container">
            <button
                className={clsx("mute-button", {
                    "muted": muted
                })}
                onClick={muteClick}
            >
                Mute
            </button>
        </div>
    </div>
}