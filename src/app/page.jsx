// Components
import Navbar from "./Componets/Navbar/Navbar"

// Routes
import Home_new from "./Componets/Routes/Home/Home_new"
import About from "./Componets/Routes/About/About"
import Footer from "./Componets/Footer/Footer";


export default function Home() {


  return (
    <>
      <Navbar />
      <Home_new />
      <Footer />
    </>
  );
}
