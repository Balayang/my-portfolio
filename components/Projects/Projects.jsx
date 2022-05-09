import styles from './Projects.module.css';
import ProjectItem from '../ProjectItem/ProjectItem';

const Projects = () => {
  return (
    <section className={styles.projects} id="work">
      <h2 className={styles.sectionTitle}>My work</h2>
      <p className={styles.sectionSubtitle}>A selection of my range of work</p>
      <div className={styles.portfolio}>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </section>
  );
};

export default Projects;
