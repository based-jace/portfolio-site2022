import '../styles/globals.scss'
import '../styles/vhs.scss'
import NavBar from "../components/NavBar";
import {ScreenEffect} from "../utils";
import {useCallback, useState} from "react";
import Footer from "../components/Footer";
import Transition from "../components/Transition";
import MuteIcon from "../components/MuteIcon";
import Toolbar from "../components/Toolbar";
import Head from "next/head";

const config = {
    effects: {
        vignette: {
            enabled: true
        },
        scanlines: {
            enabled: true
        },
        vcr: {
            enabled: true,
            options: {
                opacity: 0.01,
                miny: 220,
                miny2: 320,
                num: 10,
                fps: 10
            }
        },
        wobbley: {
            enabled: true
        },
        snow: {
            enabled: true,
            options: {
                opacity: 0.1
            }
        }
    }
};

function MyApp({Component, pageProps}) {
    const onRefChange = useCallback(node =>{
        if (node !== null){
            const screen = new ScreenEffect(node, {});
            for (const prop in config.effects) {
                if (config.effects[prop].enabled) {
                    screen.add(prop, config.effects[prop].options);
                }
            }
        }
        // Else it's not mounted
    }, []);
    const [muted, setMuted] = useState(true);

    return <>
        <Head>
            <title>Jace's Website</title>
            <link rel="icon" href="/square-coding.gif" type="image/gif" />
            <link
                 rel="stylesheet"
                 href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
           />
        </Head>
        <NavBar muted={muted} setMuted={setMuted}/>
        <div id="screen" ref={onRefChange}>
            <MuteIcon muted={muted}/>
            <Transition>
                <Component {...pageProps} />
            </Transition>
        </div>
        <Toolbar muted={muted} setMuted={setMuted}/>
        <Footer className="mainFooter"/>
    </>
}

export default MyApp;
