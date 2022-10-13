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
        <p>
            I've built all kinds of things for people all over the world.
            I'm currently in the market for new projects and am open to new roles.
            You can find me using my email and social media links below.
        </p>
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
