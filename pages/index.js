import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from "next/link";
import Footer from "../components/Footer";

const skills = [
  "Full-Stack Development",
  "Web Development",
  "Front-End Development",
  "Project Management",
  "Task Automation"
]

const technologies = [
  "TypeScript/JavaScript",
  "React/Next/Redux/RTK Query",
  "Vue/Nuxt",
  "Python",
  "FastAPI, Flask, Django",
  "HTML/CSS",
  "Docker",
  "Postgres",
  "AWS"
]

function Emphasis({children}) {
  return <span className={styles.emphasis}>{children}</span>
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles["profile-pic-cont"]}>
        <Image src="/jace1.png" alt="an image of me" layout='responsive' width={1836} height={2330}/>
      </div>
      <div className={`${styles.bio} ${styles.extraLargeBio}`}>
        <h1>Howdy</h1>
        <p>
          I'm Jace, currently harnessing my expertise as a <Emphasis>Senior Front-End Developer</Emphasis> at Medtronic.
          Here, I've spearheaded a project enhancing team efficiency by 30% with a cutting-edge React and TypeScript
          application. My core skills in <Emphasis>React/Next</Emphasis>, <Emphasis>Python</Emphasis>,
          and <Emphasis>AWS</Emphasis> have been pivotal in my career.
        </p>
        <p>
          My journey at Twitter, as a <Emphasis>Senior Front-End Developer</Emphasis>, led to a notable 25% uplift in
          user satisfaction, thanks to my leadership over the Blue Web and Mobile Components teams. My focus? Delivering
          user-centric solutions with measurable impacts.
        </p>
        <p>
          Previously at Ware, as a <Emphasis>Full-Stack Developer</Emphasis>, I was instrumental in increasing task completion time from 2 days to 2 minutes through well-executed app design and implementation.
        </p>
        <p>
          For a closer look at my professional narrative and the value I bring, explore my <Link
          href="/portfolio">portfolio</Link>. For employment opportunities, please connect via my <Link href="/contact">contact
          page</Link>.
        </p>
      </div>
      <div className={`${styles.bio} ${styles.largeBio}`}>
        <h1>Howdy</h1>
        <p>
          I'm Jace, currently harnessing my expertise as a <Emphasis>Senior Front-End Developer</Emphasis> at Medtronic.
          Here, I've spearheaded a project enhancing team efficiency by 30% with a cutting-edge React and TypeScript
          application. My core skills in <Emphasis>React/Next</Emphasis>, <Emphasis>Python</Emphasis>,
          and <Emphasis>AWS</Emphasis> have been pivotal in my career.
        </p>
        <p>
          My journey at Twitter, as a <Emphasis>Senior Front-End Developer</Emphasis>, led to a notable 25% uplift in
          user satisfaction, thanks to my leadership over the Blue Web and Mobile Components teams.
        </p>
        <p>
          For a closer look at my professional narrative and the value I bring, explore my <Link
          href="/portfolio">portfolio</Link>. For employment opportunities, please connect via my <Link href="/contact">contact
          page</Link>.
        </p>
      </div>
      <div className={styles.skills}>
        <h1>Skills</h1>
        <ul>
          {skills.map((skill) => {
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
          {technologies.map((tech) => {
            return <li key={tech}>{tech}</li>
          })}
        </ul>
      </div>
      <Footer className="mobileFooter"/>
    </main>
  )
}
