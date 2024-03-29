import {useEffect, useState} from "react";

import _ from 'lodash';

import {portfolioProject} from "../types/portfolioProject";
import styles from '../styles/Portfolio.module.scss';
import Image from "next/image";
import clsx from "clsx";

const githubOwner = 'based-jace';

const projects: portfolioProject[] = [
  {
    title: "Sara's Dreamlings",
    description: "A React web app for an independent children's book publisher",
    preview: "/dream-my-sweet-dreamer1.png",
    imageAlt: "Screenshot of the Sara's Dreamlings website",
    siteUrl: "https://sarasdreamling.com"
  },
  {
    title: "Easy's Smoke Shop",
    description: "A React web app for a regional smoke shop chain in the DFW metroplex, complete with a CMS so the owner can manage the content himself.",
    preview: "/easys-logo.png",
    imageAlt: "Easy's Smoke Shop logo",
    siteUrl: "https://easysmoke.shop"
  },
  {
    githubRepoName: "craiyon-bot",
    title: "Craiyon Bot",
    description: "A Discord bot that uses Craiyon's AI to generate images",
    preview: "/craiyon-bot.png",
    imageAlt: "9-panel image depicting `technicolor chicken scratch art` as generated by Craiyon Bot using the craiyon.ai API"
  },
  {
    githubRepoName: "portfolio-site2022",
    title: "This Website",
    description: "Check out the code on GitHub",
    preview: "/me-coding.gif",
    imageAlt: "The same pixelated gif of me coding from the index page"
  },
  {
    githubRepoName: "fara-the-film-bot",
    title: "Fara the Film Bot",
    description: "A Twitter bot that uses numerous APIs to recommend films, scrapes Wikipedia for data about them, then saves that data to a Google Sheet",
    preview: "/film-bot.png",
    imageAlt: "Stock image of a robot -- there are no images directly associated with this project"
  },
  {
    githubRepoName: "combining-flask-with-vue",
    title: "Combining Flask with Vue",
    description: "3 Ways to Combine Flask with Vue - a repo for a post that I did for testdriven.io",
    preview: "/flask+vue.png",
    imageAlt: "SEO comparison of the app associated with this project running on vanilla Vue and Nuxt",
    siteUrl: "https://testdriven.io/blog/combine-flask-vue/"
  },
  {
    githubRepoName: "concurrency-parallelism-and-asyncio",
    title: "Concurrency, Parallelism, and Asyncio",
    // githubStars: 27,
    description: "Concurrent, Parallel, and Asynchronous Computing in Python (And Other Languages) - a repo for a post that I did for testdriven.io",
    preview: "/cpa-python.png",
    imageAlt: "Bar graph showing the benefits of parallel tasks using driving, listening to music, and eating a BLT as examples",
    siteUrl: "https://testdriven.io/blog/concurrency-parallelism-asyncio/"
  },
  {
    githubRepoName: "secretary",
    title: "Secretary",
    description: "File-storage web app for freelancing electronic secretaries built with Flask, Vue, and GCP",
    preview: "/secretary-logo.png",
    imageAlt: "Stock image of a person on a computer"
  },
  {
    githubRepoName: "PS-Turtle-Coordinator",
    title: "Photoshop Turtle Coordinator",
    description: "Takes Photoshop coordinates and uses them to draw on Python's Turtle vector graphics coordinate plane",
    preview: "/python-turtle.jpeg",
    imageAlt: "A turtle next to the Python programming language logo"
  },
  {
    githubRepoName: "sheris-shaved-ice",
    title: "Sheri's Shaved Ice",
    description: "Inventory management web application I led a team to build for a local shaved ice truck",
    preview: "/ssi-logo.jpg",
    imageAlt: "Logo for Sheri's Shaved Ice"
  },
]

export default function Portfolio({_githubProjects = []}) {
  const [githubProjects, setGithubProjects] = useState<portfolioProject[]>([]);
  const [selectedProject, setSelectedProject] = useState<portfolioProject | null>(null);

  function selectProject(project) {
    setSelectedProject(project);
  }

  useEffect(() => {
    setGithubProjects(_githubProjects);
    if (_githubProjects.length > 0) setSelectedProject(_githubProjects[0]);
    else setSelectedProject(null);
  }, [_githubProjects]);

  function createGithubRepoLink(project) {
    return `https://github.com/${githubOwner}/${project.githubRepoName}`;
  }

  return (<main className={styles.main}>
    <h1>Portfolio</h1>
    <div className={styles.portfolioContainer}>
      <div className={styles.projectView}>
        {!_.isNil(selectedProject) ?
          <>
            <a
              href={createGithubRepoLink(selectedProject)}
              target="_blank"
              rel="noreferrer"
              tabIndex={-1}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={selectedProject.preview}
                  height={300}
                  width={400}
                  layout="responsive"
                  alt={selectedProject.imageAlt}
                />
              </div>
            </a>
            <h1>{selectedProject.title}</h1>
            <p>{selectedProject.description}</p>
            {
              !_.isNil(selectedProject.githubStars) ?
                <span>★: {selectedProject.githubStars}</span> :
                null
            }
            {!_.isNil(selectedProject.githubRepoName) ?
              <a
                className={styles.githubLink}
                href={createGithubRepoLink(selectedProject)}
                target="_blank"
                rel="noreferrer"
              >
                View On Github
              </a> :
              <a className={styles.githubLink} href={selectedProject.siteUrl} target="_blank" rel="noreferrer">
                View Website
              </a>
            }
            {
              !_.isNil(selectedProject.siteUrl) && !_.isNil(selectedProject.githubRepoName) ?
                <a className={styles.blogPostLink} href={selectedProject.siteUrl} target="_blank" rel="noreferrer">
                  Read Blog Post
                </a> :
                null
            }
          </> :
          null
        }
      </div>
      <div className={styles.projectList}>
        <h1>Projects</h1>
        <ul>
          {githubProjects.map((project, i) => {
            return <li key={"project-list-item" + i}>
              <button
                className={
                  clsx({
                    [styles.selected]: _.isEqual(selectedProject, project)
                  })
                }
                onClick={() => {
                  selectProject(project)
                }}
              >
                <span className={styles.projectTitle}>{project.title}</span>
                <span className={styles.projectStars}>{project.githubStars ? `${project.githubStars}` : ""}</span>
              </button>
            </li>
          })}
        </ul>
      </div>
    </div>
  </main>)
}

export async function getServerSideProps(context) {
  return {
    props: {
      _githubProjects: projects
    }
  }
}
