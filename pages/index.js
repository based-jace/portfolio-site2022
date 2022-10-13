import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from "next/link";

const skills = [
    "Full-Stack Engineering",
    "Web Application Development",
    "Back-End Development",
    "Systems Integration",
    "Task Automation"
]

const technologies = [
    "Python",
    "Django, Flask, FastAPI",
    "JavaScript",
    "React/Next",
    "Vue/Nuxt",
    "Docker",
    "Postgres",
    "Rust",
    "AWS"
]

function Emphasis({children}){
    return <span className={styles.emphasis}>{children}</span>
}

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles["profile-pic-cont"]}>
                <Image src="/jace-thumbs-up1.jpg" alt="an image of me" layout='responsive' width={2448} height={3264}/>
            </div>
            <div className={styles.bio}>
                <h1>Yo, Dawg</h1>
                <p>
                    I'm Jace. I'm a <Emphasis>Software Engineer</Emphasis> with <Emphasis>5 years of experience</Emphasis> designing and implementing
                    web applications and other software systems using <Emphasis>Python</Emphasis>, <Emphasis>React/Next</Emphasis>, and <Emphasis>AWS</Emphasis>.
                    I specialize in building projects from the ground up with whatever features you need them to have --
                    from <Emphasis>task automation</Emphasis> to tight <Emphasis>system integrations</Emphasis> to easy-to-use <Emphasis>web applications</Emphasis>.
                </p>
                <p>
                    Previously, I was a <Emphasis>Full-Stack Software Engineer</Emphasis> working at Ware --
                    an SF-based <Emphasis>robotics</Emphasis> startup that performs warehouse inventory management using drones.
                    For Ware, I built much of the internal tooling, including a <Emphasis>Flask/React</Emphasis> webapp the entire team
                    uses to manage customers and a <Emphasis>Python/Docker/Postgres/Redis</Emphasis> testing framework used across the codebase.
                </p>
                <p>
                    As a contractor, I've built many projects for different people across the globe.
                    See my <Link href="/portfolio">portfolio</Link> for more details.
                </p>
                <p>
                    <Link href="/contact">Contact</Link> me if you have a project in mind.
                </p>
            </div>
            <div className={styles.skills}>
                <h1>Skills</h1>
                <ul>
                    {skills.map((skill)=>{
                        return <li key={skill}>{skill}</li>
                    })}
                </ul>
            </div>
            <div className={styles["nes-animation"]}>
                <Image
                    src="/me-coding.gif"
                    title="Me Coding This Website"
                    alt="An NES-style GIF of myself coding and giving a thumbs up"
                    height="240"
                    width="360"
                />
            </div>
            <div className={styles.technologies}>
                <h1>Technologies</h1>
                <ul>
                    {technologies.map((tech)=>{
                        return <li key={tech}>{tech}</li>
                    })}
                </ul>
            </div>
        </main>
    )
}
