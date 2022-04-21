import Link from 'next/link';
import Image from 'next/image';
import navStyles from './Nav.module.css';

const Nav = () => {
	return (
		<header className={navStyles.headerStyle}>
			<div className={navStyles.logo}>
				<Image
					src={`/images/devmisha.svg`}
					alt=""
					width="100"
					height="50"
				></Image>
			</div>

			<nav className={navStyles.nav}>
				<ul className={navStyles.navList}>
					<li className={navStyles.navItem}>
						<Link href="#welcome" className={navStyles.navLink}>
							Home
						</Link>
					</li>
					<li className={navStyles.navItem}>
						<Link href="#services" className={navStyles.navLink}>
							My Services
						</Link>
					</li>
					<li className={navStyles.navItem}>
						<Link href="#about" className={navStyles.navLink}>
							About me
						</Link>
					</li>
					<li className={navStyles.navItem}>
						<Link href="#work" className={navStyles.navLink}>
							My Work
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Nav;
