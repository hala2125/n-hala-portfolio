import styles from './Skills.module.css';

const technicalSkills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Python", level: 80 },
  { name: "Mysql", level: 80 },
  { name: "Firebase", level: 100 },
  { name: "Git & GitHub", level: 90 },
];

const professionalSkills = [
  { name: "Creativity", level: 100 },
  { name: "Problem Solving", level: 90 },
  { name: "Communication", level: 75 },
  { name: "Teamwork", level: 100 },
];

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Skills & Technologies</h2>

        <div className={styles.skillsGrid}>
        
          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>Technical Skills</h3>
            <div className={styles.bars}>
              {technicalSkills.map((skill, index) => (
                <div key={index} className={styles.barItem}>
                  <div className={styles.label}>
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className={styles.progressContainer}>
                    <div 
                      className={styles.progress} 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>Professional Skills</h3>
            <div className={styles.circles}>
              {professionalSkills.map((skill, index) => (
                <div key={index} className={styles.circleItem}>
                  <div className={styles.circle}>
                    <svg viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 1 0 0 31.831 a 15.9155 15.9155 0 1 0 0 -31.831"
                        fill="none"
                        stroke="#1e1e2f"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 1 1 0 31.831 a 15.9155 15.9155 0 1 1 0 -31.831"
                        fill="none"
                        stroke="#bb86fc"
                        strokeWidth="3"
                        strokeDasharray={`${skill.level}, 100`}
                      />
                    </svg>
                    <span className={styles.percentage}>{skill.level}%</span>
                  </div>
                  <p className={styles.circleLabel}>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;