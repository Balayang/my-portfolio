import Link from 'next/link';
import AboutCard from '../AboutCard/AboutCard';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.sectionTitle}>What I do</h2>
      <div className={styles.services}>
        <AboutCard
          cardHeader={'Design + Development'}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <AboutCard
          cardHeader="E-Commerce"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <AboutCard
          cardHeader="WordPress"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>

      <div className={styles.btn}>
        <Link href="#work" className={styles.btnLink}>
          My Work
        </Link>
      </div>
    </section>
  );
};

export default About;
