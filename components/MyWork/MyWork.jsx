import styles from './MyWork.module.css';
import PortfolioItem from '../PortfolioItem/PortfolioItem';

const MyWork = () => {
	return (
		<section className={styles.myWork} id="work">
			<h2 className={styles.sectionTitle}>My work</h2>
			<p className={styles.sectionSubtitle}>A selection of my range of work</p>
			<div className={styles.portfolio}></div>
		</section>
	);
};

export default MyWork;
