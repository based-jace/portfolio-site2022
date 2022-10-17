import Link from "next/link";
import {useRouter} from "next/router";
import clsx from "clsx";
import MuteButton from "./MuteButton";

const routes = [
    {
        route: "/",
        className: "home",
        text: "Home",
        mobileIcon: <i className="fas fa-home"></i>
    },
    {
        route: "/portfolio",
        className: "portfolio",
        text: "Portfolio",
        mobileIcon: <i className="fas fa-briefcase"></i>
    },
    {
        route: "/contact",
        className: "contact",
        text: "Contact",
        mobileIcon: <i className="fas fa-user"></i>
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
                    <span className="mobileIcon">{route.mobileIcon}</span>
                </button>
            </Link>
        })}
        <MuteButton muted={muted} muteClick={muteClick}/>
    </nav>
}
