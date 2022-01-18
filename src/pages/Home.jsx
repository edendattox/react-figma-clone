import { Footer } from "../components/Footer";
import { Gallery } from "../components/Gallery";
import { Header } from "../components/Header";
import { Signup } from "../components/Signup";

export const Home = () => {
  return (
    <div>
      <Header />
      <Gallery />
      <Signup />
      <Footer />
    </div>
  );
};
