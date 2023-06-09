import Footer from '../navigation/Footer';
import Header from '../navigation/Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
