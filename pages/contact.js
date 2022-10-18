import styles from "../styles/Contact.module.scss";
import Footer from "../components/Footer";
import Image from "next/image";

const socialMediaLinks = [
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/jace-medlin",
        text: "linkedin.com/in/jace-medlin",
        icon: "/linkedin-logo.png"
    },
    {
        name: "GitHub",
        url: "https://github.com/based-jace",
        text: "github.com/based-jace",
        icon: "/github-logo.png"
    },
    {
        name: "Email",
        url: "jacemedlin@gmail.com",
        text: "jacemedlin@gmail.com",
        icon: "/email-icon.png"
    }
]

export default function Contact(){
    return <main className={styles.main}>
        <h1>Contact Me</h1>
        <p>
            I've built all kinds of things for people all over the world.
            I'm currently in the market for new projects and am open to new roles.
            You can find me using my email and social media links below.
        </p>
        <ul>
            {
                socialMediaLinks.map((smlink)=>{
                    return <li key={smlink.name}>
                        <span className={styles.text}>{smlink.name}: </span>
                        <span className={styles.icon}>
                            <a href={smlink.url} target="_blank" rel="noreferrer">
                                <Image
                                    src={smlink.icon}
                                    width={36}
                                    height={36}
                                    alt={`${smlink.name} icon`}
                                />
                            </a>
                        </span>
                        <a className={styles.link} href={smlink.url} target="_blank" rel="noreferrer">{smlink.text}</a>
                    </li>
                })
            }
        </ul>
        <Footer className="mobileFooter"/>
    </main>
}
