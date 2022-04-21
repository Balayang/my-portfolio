import Nav from './Nav/Nav';
//import Meta from './Meta'
//import Header from './Header'
//import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
	return (
		<>
			<Nav />
			<div className>
				<main>{children}</main>
			</div>
		</>
	);
};

export default Layout;
