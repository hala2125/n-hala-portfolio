import { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const formspreeEndpoint = 'https://formspree.io/f/mojqonrp'; 

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.content}>
          
          <div className={styles.left}>
            <h2 className={styles.title}>Contact Me</h2>
            <h3 className={styles.subtitle}>Let's Work Together</h3>
            <p className={styles.description}>
              I'm open to freelance opportunities, collaborations, or just a friendly chat about web development and React. Feel free to reach out!
            </p>

            <div className={styles.info}>
              <p><span>Email:</span> hala.bennini@univ-constantine2.dz</p>
              <p><span>Phone:</span> +213 699320241</p>
            </div>

            <div className={styles.social}>
              <a href="https://linkedin.com/in/bh.nadine" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/hala2125" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.instagram.com/bh.nadine" target="_blank" rel="noopener noreferrer">instagram</a>
            </div>
          </div>

          
          <div className={styles.right}>
            <form action={formspreeEndpoint} method="POST" className={styles.form}>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Enter Your Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                rows="6"
                placeholder="Enter Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit" className={styles.submitBtn}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;