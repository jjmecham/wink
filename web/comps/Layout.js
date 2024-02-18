import Footer from "./Footer";
import Head from "./Head";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Navbar/>
      <Head/>
      <div className="content">
      {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
