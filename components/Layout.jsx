import Nav from './Nav/Nav';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
