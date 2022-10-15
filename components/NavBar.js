import Link from "next/link";
import {useRouter} from "next/router";
import clsx from "clsx";
import MuteButton from "./MuteButton";

const routes = [
    {
        route: "/",
        className: "home",
        text: "Home"
    },
    {
        route: "/portfolio",
        className: "portfolio",
        text: "Portfolio"
    },
    {
        route: "/contact",
        className: "contact",
        text: "Contact"
    }
]

export default function NavBar({muted, setMuted}){
    const router = useRouter();

    function muteClick(){
        setMuted(!muted);
    }

    return <nav>
        {routes.map((route)=>{
            return <Link href={route.route} key={route.className}>
                <button className={clsx(
                    route.className, {
                        selected: router.pathname === route.route
                    }
                )}>
                    {route.text}
                </button>
            </Link>
        })}
        <MuteButton muted={muted} muteClick={muteClick}/>
    </nav>
}
