import LandingPage from "@/components/Portfolio/LandingPage";
import Connect from "@/components/Portfolio/Connect";
import Footer from "@/container/Footer";
import Experience from "@/components/Portfolio/Experience";
import Projects from "@/components/Portfolio/Projects";
import Blogs from "@/components/Portfolio/Blogs";
import AboutMe from "@/components/Portfolio/AboutMe";
import RandomQuote from "@/components/Portfolio/RandomQuote";
import SetUp from "@/components/Portfolio/SetUp";

const page = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <LandingPage />
      <Experience />
      <Projects />
      <AboutMe />
      <Blogs />
      <Connect />
      <SetUp />
      <RandomQuote />
      <Footer />
    </div>
  );
};

export default page;
