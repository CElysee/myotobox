import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Routers from "../../routers/Routers";

function Layout() {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  );
}

export default Layout;