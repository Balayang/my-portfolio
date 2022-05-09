import Image from 'next/image';
import styles from './PortfolioItem.module.css';

const PortfolioItem = () => {
  const openInNewTab = url => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Image
      className={styles.portfolioItem}
      src={`/images/portfolio-01.jpg`}
      alt=""
      height={300}
      width={300}
      onClick={() => openInNewTab('https://stackoverflow.com')}
    ></Image>
  );
};

export default PortfolioItem;
