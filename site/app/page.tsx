import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Products from "./sections/Products";
import Woods from "./sections/Woods";
import Differentials from "./sections/Differentials";
import Location from "./sections/Location";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <About />
      <Products />
      <Woods />
      <Differentials />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}
