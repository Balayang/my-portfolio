import Image from 'next/image';
import styles from './AboutMe.module.css';

const AboutMe = () => {
	return (
		<section className={styles.aboutMe} id="about">
			<h2 className={styles.sectionTitle}>Who I am</h2>
			<p className={styles.sectionSubtitle}>
				Designer and developer based out of NYC
			</p>

			<div className={styles.aboutMeBody}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
			</div>
			<Image
				src={`/images/dev-jane-02.jpg`}
				alt="a picture of Michaela Pupikova"
				class={styles.aboutMeImg}
				layout="intrinsic"
				width="1x"
				height="1x"
			></Image>
		</section>
	);
};

export default AboutMe;
