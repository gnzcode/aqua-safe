import About from "package/components/about";
import Activities from "package/components/activities";
import Contact from "package/components/contact";
import Footer from "package/components/footer";
import Header from "package/components/header";
import Location from "package/components/location";
import Members from "package/components/members";
import Navigation from "package/components/navigation";
import ScrollToTop from "package/components/scrollToTop";
import Strategies from "package/components/strategies";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="main">
        <Header />
        <About />
        <Activities />
        <Strategies />
        <Location />
        <Members />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
}
