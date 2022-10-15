import clsx from "clsx";

export default function MuteButton({muted, muteClick}){
    return <button
        className={clsx("mute-button", {
            "muted": muted
        })}
        onClick={muteClick}
    >
        Mute
    </button>
}