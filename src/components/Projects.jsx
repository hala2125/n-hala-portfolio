import styles from './Projects.module.css';

const projects = [
  {
    title: "Lab 5: Kanban Board",
    description: "The goal of this lab is to create a Trello-like Kanban board to manage tasks across stages using core React architecture principles",
    tech: ["React", "Vite", "CSS Modules"],
    github: "https://github.com/hadilbenzaid/Caw/tree/Kanban-Board",
    image: "/image2.png"
    
  },
  {
    title: "Lab3 – Node.js & NPM",
    description: "The lab presents Node.js and NPM for building applications using existing JavaScript libraries",
    tech: ["Node.js", "javascript", "npm"],
    github: "https://github.com/hadilbenzaid/Caw/tree/Lab4",
    image: "/image3.png"
    
  },
  
  
];

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projects Showcase</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageContainer}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={styles.projectImage} 
                />
              </div>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              
              <div className={styles.tech}>
                {project.tech.map((t, i) => (
                  <span key={i} className={styles.badge}>{t}</span>
                ))}
              </div>

              <div className={styles.links}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  GitHub
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.linkDemo}>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;