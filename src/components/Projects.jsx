import threejs from "../projectfiles/threejs.mp4";
import rideablehorses from "../projectfiles/temphorse.jpg";
import backrooms from "../projectfiles/backrooms.jpg";
import portfolio from "../projectfiles/portfolio.png";
import digitalsignage from "../projectfiles/digitalsignage.jpg";
import cruxpanel from "../projectfiles/cruxpanel.png";
import cctv from "../projectfiles/cctv.png";
import gj from "../projectfiles/gj.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Description } from "@mui/icons-material";
import { useRef } from "react";

const ProjectSnips = [
  {
    title: "My portfolio",
    description:
      "Almost like you are watching inception, yes this portofolio was made in ReactJS with Tailwindcss!",
    media: portfolio,
    image: true,
    code: null,
    category: "JS",
  },
  {
    title: "CloudCrux Panel",
    description:
      "This is the new CloudCrux Hosting panel made in ReactJS. It currently is in development, but features and will feature automatic cloud hosting deployment and payment processing",
    media: cruxpanel,
    image: true,
    code: null,
    category: "JS",
  },
  {
    title: "Digital Signage - PPC",
    description:
      "Miniature usb stick computers running node servers that would live update signs inside of a casino. Mini computers are on the right, and the example menu that the art department made is on the left.",
    media: digitalsignage,
    image: true,
    code: null,
    category: "JS",
  },
  {
    title: "ThreeJS Terrain",
    description: "Procedural infinite terrain all made in threeJS",
    media: threejs + "#t=2,7",
    image: false,
    code: null,
    category: "JS",
  },
  {
    title: "Rideable Horses",
    description: "Rideable horses for the game rust! ",
    media: rideablehorses,
    image: true,
    code: "https://fastdl.cloudcrux.net/rust/TsunHorse.cs",
    category: "CS",
  },
  {
    title: "CCTV Cameras",
    description:
      "Usable cctv camera system for the game rust! Which could send an sms alert if unwanted visitors arrived",
    media: cctv,
    image: true,
    code: "https://fastdl.cloudcrux.net/rust/TsunHorse.cs",
    category: "CS",
  },
  {
    title: "Backrooms",
    description: "A hobby project in C++ to recreate backrooms generation",
    media: backrooms,
    image: true,
    category: "OTHER",
  },
];
const Projects = (Ref) => {
  const galleryRefs = useRef([]);
  const addRef = (r) => {
    if (r && !galleryRefs.current.includes(r)) galleryRefs.current.push(r);
  };
  const showCat = (cat) => {
    galleryRefs.current.forEach((e) => {
      if (cat === "ALL") {
        e.classList.remove("hidden");
        return;
      }
      switch (e.getAttribute("category")) {
        case "JS":
          e.classList.add("hidden");
          if (cat === "JS") e.classList.remove("hidden");
          break;
        case "CS":
          e.classList.add("hidden");
          if (cat === "CS") e.classList.remove("hidden");
          break;
        default:
          e.classList.add("hidden");
          if (cat === "OTHER") e.classList.remove("hidden");
      }
    });
  };
  return (
    <>
      <div
        id="Projects"
        className="w-full h-full text-slate-50 font-roboto flex relative py-10"
      >
        <div className="h-4/5 w-full text-center justify-between items-center flex-wrap">
          <div className="pt-12 pb-16 content-center text-center justify-between items-center text-4xl">
            Projects
          </div>
          <div className="w-full text-center">
            <button
              onClick={() => showCat("ALL")}
              className="bg-slate-200 hover:bg-slate-400 active:bg-slate-600 focus:bg-slate-600 text-slate-900 font-bold py-2 px-4 mx-2 rounded"
            >
              All
            </button>
            <button
              onClick={() => showCat("JS")}
              className="bg-slate-200 hover:bg-slate-400 text-slate-900 focus:bg-slate-600 font-bold py-2 px-4 mx-2 rounded"
            >
              JS
            </button>
            <button
              onClick={() => showCat("CS")}
              className="bg-slate-200 hover:bg-slate-400 text-slate-900 focus:bg-slate-600 font-bold py-2 px-4 mx-2 rounded"
            >
              C#
            </button>
            <button
              onClick={() => showCat("OTHER")}
              className="bg-slate-200 hover:bg-slate-400 text-slate-900 focus:bg-slate-600 font-bold py-2 px-4 mx-2 rounded"
            >
              Other
            </button>
          </div>
          <div className="p-4 md:w-full sm:h-full place-content-center">
            <div className="flex flex-wrap justify-center">
              <section className=" overflow-hidden text-gray-700  container px-5 py-2  lg:pt-12 lg:px-32 sm:flex md:flex-wrap ">
                {ProjectSnips.map(
                  ({ title, image, media, category, description }) => {
                    return (
                      <div
                        className="group gallery-JS flex flex-wrap md:w-1/3 md:h-auto sm:w-auto sm:w-1/3 z-0 hover:z-30"
                        key={title}
                        ref={addRef}
                        category={category}
                      >
                        <div className="w-full p-1 md:p-2">
                          {image ? (
                            <>
                              <img
                                muted
                                loop
                                alt={title}
                                className="border-4 border-slate-400 transform transition duration-500  group-hover:scale-110 block object-cover w-full h-full rounded-lg"
                                src={media}
                              />
                            </>
                          ) : (
                            <video
                              muted
                              loop
                              alt={title}
                              className="border-4 border-slate-400 transform transition duration-500  group-hover:scale-110 block object-fit  w-full h-full rounded-lg"
                              onMouseEnter={(e) => e.target.play()}
                              onMouseLeave={(e) => e.target.pause()}
                              src={media}
                            />
                          )}
                          <div className="bg-black/50 relative bottom-1/4 w-full  invisible group-hover:visible transform transition duration-500  group-hover:scale-110  text-slate-50">
                            {description}
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
