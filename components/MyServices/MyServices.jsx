import styles from './MyServices.module.css';

const MyServices = () => {
	return (
		<section className={styles.myServices}id="services">
			<h2 className={`${styles.sectionTitle} ${styles.sectionTitleServices}`}>
				What I do
			</h2>
			<div className={styles.services}>
				<div className={styles.service}>
					<h3>Design + Development</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</div>

				<div className={styles.service}>
					<h3>E-Commerce</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</div>

				<div className={styles.service}>
					<h3>WordPress</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</div>
			</div>

			<a href="#work" className={styles.btn}>
				My Work
			</a>
		</section>
	);
};

export default MyServices;
