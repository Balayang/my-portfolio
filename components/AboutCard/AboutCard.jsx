import styles from './AboutCard.module.css';

const AboutCard = ({ cardHeader, description }) => {
  <div className={styles.service}>
    <h3>{cardHeader}</h3>
    <p>{description}</p>
  </div>;
};

export default AboutCard;
