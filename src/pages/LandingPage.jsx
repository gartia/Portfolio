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
        </div>
      </div>
      <div className="bg-gradient-to-r from-slate-800 animate-background to-sky-900  ">
        {" "}
        <div
          className="bg-black/20
         backdrop-blur-xl "
        >
          <Contact></Contact>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
