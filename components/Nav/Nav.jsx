import Link from 'next/link';
import Image from 'next/image';
import styles from './Nav.module.css';

const Nav = () => {
	return (
		<header className={styles.headerStyle}>
			<div className={styles.imageContainer}>
				<Link href="#introduction" passHref>
					<Image
						className={styles.logoImg}
						src={`/images/devmisha.svg`}
						alt=""
						layout="fill"
					></Image>
				</Link>
			</div>
			<nav className={styles.nav}>
				<ul className={styles.navList}>
					<li className={styles.navItem}>
						<Link href="#introduction" className={styles.navLink}>
							Home
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href="#about" className={styles.navLink}>
							About
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href="#work" className={styles.navLink}>
							Work
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href="#contact" className={styles.navLink}>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Nav;
