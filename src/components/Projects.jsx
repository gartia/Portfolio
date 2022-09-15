import threejs from "../projectfiles/threejs.mp4";
import threejs2 from "../projectfiles/threejs.jfif";
import rideablehorses from "../projectfiles/rideablehorses.mp4";
import backrooms from "../projectfiles/backrooms.jpg";
import portfolio from "../projectfiles/portfolio.png";
import digitalsignage from "../projectfiles/digitalsignage.jpg";
import dynamiclights from "../projectfiles/dynamiclights.mp4";
import cruxpanel from "../projectfiles/cruxpanel.png";
import cctv from "../projectfiles/cctv.png";
import "react-multi-carousel/lib/styles.css";
import YouTube from "react-youtube";
import { useRef, useState } from "react";
import GalleryModal from "./Modal";
/*
This is the modal and gallery information. 
TODO: Seperate the modal information and gallery code
*/
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
    description: (
      <>
        Infinite procedural terrain generation in ThreeJS. With a chunk loading
        mechanic
        <img src={threejs2} alt="threejs chunk generation" />
      </>
    ),
    media: threejs + "#t=2,7",
    image: false,
    code: null,
    category: "JS",
  },
  {
    title: "Rideable Horses",
    description: (
      <>
        Adds rideable horses to the game rust! It sold thousands of copies, and
        ended up inspiring a native feature into the game.
        <YouTube
          className="w-full "
          iframeClassName="w-full"
          videoId="erVhbBMOowY"
        />
      </>
    ),
    media: rideablehorses,
    image: false,
    category: "CS",
  },
  {
    title: "CCTV Cameras",
    description:
      "Usable cctv camera system for the game rust! Which could send an sms alert if unwanted visitors arrived",
    media: cctv,
    image: true,
    category: "CS",
  },
  {
    title: "Dynamic Lights",
    description:
      "Dynamic light system for minecraft spigot servers! Used by a couple thousand servers.",
    media: dynamiclights + "#t=1",
    image: false,
    category: "OTHER",
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
  const openGalleryModal = useRef(null);
  const galleryRefs = useRef([]);
  const [state, setState] = useState({
    modalInfo: {
      title: null,
      description: null,
      media: null,
      image: null,
      code: null,
      category: null,
    },
  });

  const addRef = (r) => {
    if (r && !galleryRefs.current.includes(r)) galleryRefs.current.push(r);
  };
  //This will show only specific categories for the gallery
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
  const setGalleryModal = (obj) => {
    setState({
      modalInfo: obj,
    });
    openGalleryModal.current();
  };
  /*
The is the gallery component which has category sorting and modal options
*/
  return (
    <>
      <GalleryModal
        openGalleryModal={openGalleryModal}
        modalInfo={state.modalInfo}
      />
      <div
        id="Projects"
        className="w-full h-full text-slate-50 font-roboto flex relative py-10"
      >
        <div className="h-4/5 w-full text-center justify-between items-center flex-wrap">
          <h3 className="underline pt-12 pb-16 content-center text-center justify-between items-center text-4xl">
            Projects
          </h3>
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
                {ProjectSnips.map((obj) => {
                  let { title, image, media, category, description } = obj;
                  return (
                    <div
                      className="cursor-pointer group gallery-JS flex flex-wrap md:w-1/3 md:h-auto sm:w-auto sm:w-1/3 z-0 hover:z-30"
                      key={title}
                      onClick={() => setGalleryModal(obj)}
                      ref={addRef}
                      category={category}
                    >
                      <div className="w-full p-1 md:p-2">
                        {image ? (
                          <>
                            <img
                              muted
                              loop
                              title={title}
                              alt={description}
                              className="bg-black border-4 border-slate-400 transform transition-all duration-500 ease-in-out object-scale-down group-hover:scale-110 block w-full h-full rounded-lg"
                              src={media}
                            />
                          </>
                        ) : (
                          <video
                            muted
                            loop
                            title={title}
                            alt={description}
                            className="bg-black border-4 border-slate-400 transform transition-all duration-500 ease-in-out object-scale-down group-hover:scale-110 block  w-full h-full rounded-lg"
                            onMouseEnter={(e) => e.target.play()}
                            onMouseLeave={(e) => e.target.pause()}
                            src={media}
                          />
                        )}
                        <div className="bg-black/50 relative bottom-full w-full p-5 invisible group-hover:visible transform transition duration-500  group-hover:scale-110  text-slate-50">
                          {title}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
