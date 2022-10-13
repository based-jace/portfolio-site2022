import clsx from "clsx";

export default function MuteIcon({muted}){
    return <h1
        className={clsx("mute-icon", {"muted": muted})}
    >
        [MUTE]
    </h1>
}
