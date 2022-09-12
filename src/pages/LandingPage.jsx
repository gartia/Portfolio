import NavBar from "../components/NavBar";
import Synopsis from "../components/Synopsis";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
//Landing pages combining all componenets together and adding a background
const LandingPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="bg-mountain bg-fixed bg-no-repeat bg-top  ">
        <div
          className="bg-black/50
         backdrop-blur-xl "
        >
          <Synopsis></Synopsis>
        </div>
      </div>
      <div className="bg-darkmountain bg-fixed bg-no-repeat bg-top">
        <div
          className="bg-black/50
         backdrop-blur-xl "
        >
          <AboutMe></AboutMe>
          <Projects></Projects>
          <Contact></Contact>
        </div>
      </div>
      <div className="bg-gradient-to-r from-violet-200 animate-background to-blue-200  "></div>
    </>
  );
};

export default LandingPage;
