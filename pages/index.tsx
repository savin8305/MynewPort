import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import { ISkills, IJobs, IProjects, Theme } from "../typings";
import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Jobs } from "../components/Jobs";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import ScrollUp from "../assets/scrollup.webp";
import portimg from "../assets/14.webp";


const Home: NextPage = () => {
  const jobsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const [theme, setTheme] = useState<Theme>("light");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const data = localStorage.getItem("themeValue");
    setTheme(data === "light" || !data ? "light" : "dark");

    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout duration as needed
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("themeValue", newTheme);
    setTheme(newTheme);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavItemClick = (item: string) => {
    let scrollObject = {};
    switch (item) {
      case "about":
        scrollObject = {
          top: 0,
          behavior: "smooth",
        };
        break;

      case "jobs":
        scrollObject = {
          top: jobsRef.current?.offsetTop! - 70,
          behavior: "smooth",
        };
        break;

      case "projects":
        scrollObject = {
          top: projectsRef.current?.offsetTop! - 70,
          behavior: "smooth",
        };
        break;

      case "skills":
        scrollObject = {
          top: skillsRef.current?.offsetTop! - 70,
          behavior: "smooth",
        };
        break;

      case "contact":
        scrollObject = {
          top: contactRef.current?.offsetTop! - 70,
          behavior: "smooth",
        };
        break;

      default:
        break;
    }

    window.scrollTo(scrollObject);
  };

  return (
    <div>
      <Head>
        <title>AKASH VISHWAKARMA</title>
        <meta
          name="keywords"
          content="AKASH,Akash,Akash_9770,Akash8305,Savin8305,savin,Visavinsh"
        />
        <meta
          name="description"
          content="Hey, I'm Akash Vishwakarma a Software Developer from Rewa, MadhyaPradesh. Here's my portfolio where you can see all my projects, blogs, and achievements."
        />
        <meta name="author" content="Akash" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init();</script>
      </Head>

      {isLoading ? (
        <div className="loading-interface"><img src={portimg.src} alt="" /></div>
      ) : (
        <main data-theme={theme}>
          <Navbar onNavItemClick={handleNavItemClick} switchTheme={switchTheme} theme={theme} />

          <section className="about">
            <About />
          </section>

          <section className="jobs" ref={jobsRef}>
            <Jobs />
          </section>

          <section className="projects" ref={projectsRef}>
            <Projects />
          </section>

          <section className="skills" ref={skillsRef}>
            <Skills />
          </section>

          <section className="contact" ref={contactRef}>
            <Contact theme={theme} />
          </section>

          <Footer />

          {isVisible && <img src={ScrollUp.src} alt="" className="scroll-up" onClick={scrollToTop} />}

          <ToastContainer
            position="top-right"
            autoClose={3500}
            hideProgressBar={false}
            closeOnClick={true}
            pauseOnFocusLoss={false}
            pauseOnHover={false}
          />
        </main>
      )}

      <script>AOS.init();</script>
    </div>
  );
};

export default Home;
