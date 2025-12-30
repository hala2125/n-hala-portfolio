import { motion } from 'framer-motion';
import styles from './Home.module.css';

const photoUrl = '/image.jpg';

function Home() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <motion.div 
          className={styles.textContainer}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h2 className={styles.subtitle} transition={{ delay: 0.3 }}>Junior React Developer</motion.h2>
          <motion.h1 className={styles.title} transition={{ delay: 0.6 }}>n.hala</motion.h1>
          <motion.p className={styles.bio} transition={{ delay: 0.9 }}>
            Building modern web experiences with creativity and technology.<br />
            Specializing in React, responsive design, and clean code.
          </motion.p>
          <motion.a href="#contact" className={styles.btn} transition={{ delay: 1.2 }} whileHover={{ scale: 1.1 }}>
            Let's Connect
          </motion.a>
        </motion.div>

        <motion.div 
          className={styles.photoContainer}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <motion.div 
            className={styles.glowCircle}
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ repeat: Infinity, duration: 5 }}
          />
          <img src={photoUrl} alt="n.hala" className={styles.photo} />
        </motion.div>
      </div>
    </section>
  );
}

export default Home;