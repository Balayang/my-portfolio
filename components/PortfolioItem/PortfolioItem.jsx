import Image from 'next/image';
import Link from 'next/link';
import styles from './PortfolioItem.module.css';

const PortfolioItem = () => {
	return (
		<Link href={link} className={styles.portfolioItem}>
			<Image
				src={`/images/portfolio-01.jpg`}
				alt=""
				width="100"
				height="50"
			></Image>
		</Link>
	);
};

export default PortfolioItem;
