import Image from 'next/image';
import styles from './Introduction.module.css';

const Introduction = () => {
	return (
		<section className={styles.intro} id="introduction">
			<h1 className={styles.sectionTitle}>
				Hi, I am <strong>Michaela Pupikova</strong>
			</h1>
			<p className={styles.sectionSubtitle}>front-end dev</p>
			<Image
				src={`/images/dev-jane-01.jpg`}
				alt="a picture of Michaela Pupikova"
				className={styles.introImg}
				width="300"
				height="300"
			></Image>
		</section>
	);
};

export default Introduction;
