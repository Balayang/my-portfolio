import Image from 'next/image';
import styles from './Introduction.module.css';

const Introduction = () => {
	return (
		<section className={styles.intro} id="home">
			<h1 className={styles.sectionTitle}>
				Hi, I am <strong>Michaela Pupikova</strong>
			</h1>
			<p className={styles.sectionSubtitle}>front-end dev</p>
			<Image
				src={`/images/dev-jane-01.jpg`}
				alt="a picture of Michaela Pupikova"
				class={styles.introImg}
				layout="fill"
			></Image>
		</section>
	);
};

export default Introduction;
