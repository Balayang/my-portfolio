import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p className={styles.subtitle} id="contact">
				Contact me:
			</p>

			<Link
				href="mailto:michaela.pupikova22@gmail.com"
				className={styles.footerLink}
			>
				michaela.pupikova22@gmail.com
			</Link>
			<Link href="tel:+420-778-502-411" className={styles.footerLink}>
				+420 778 502 411
			</Link>
		</footer>
	);
};

export default Footer;
