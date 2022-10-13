import styles from "../styles/Contact.module.scss";

const socialMediaLinks = [
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/jace-medlin"
    },
    {
        name: "GitHub",
        url: "https://github.com/based-jace"
    },
    {
        name: "Email",
        url: "jacemedlin@gmail.com"
    }
]

export default function Contact(){
    return <main className={styles.main}>
        <h1>Contact Me</h1>
        <p>Blah blah blah, here's some shit about contacting me. You can find me using my email and social media links below.</p>
        <ul>
            {
                socialMediaLinks.map((smlink)=>{
                    return <li key={smlink.name}>
                        <span>{smlink.name}: </span>
                        <a href={smlink.url} target="_blank" rel="noreferrer">{smlink.url}</a>
                    </li>
                })
            }
        </ul>
    </main>
}
