import profile from "../images/Michael Nichols.jpg";

import {
  ArrowDownward,
  Facebook,
  GitHub,
  YouTube,
  Language,
} from "@mui/icons-material";

const onScroll = () => {
  const scrollTop = this.myRef.current.scrollTop;
  console.log(`myRef.scrollTop: ${scrollTop}`);
  this.setState({
    scrollTop: scrollTop,
  });
};
/*
The is the synopsis component it has general description and 
social media icons
*/
const Synopsis = () => {
  console.log("please ignore test:" + process.env.NODE_ENV);
  return (
    <>
      <div
        id="Home"
        className="h-screen content-center text-slate-200 font-roboto py-10"
      >
        <div className="pt-12 pb-8 place-content-center">
          <div className=" flex flex-wrap place-content-center justify-center">
            <img
              src={profile}
              className="max-h-full w-1/6 shadow-lg rounded-full align-middle border-4 border-slate-400"
              title="Michael Nichols the fullstack software developer."
              alt="Besides being a FullStack Developer and System Admin i love going out and hiking especially the eastern sierra's which is behind me!"
            />
          </div>
          <h1 className="md:w-1/2 pt-6 text-xl text-center mx-auto">
            <span className="mb-10 pt-4 text-4xl text-center">
              Hey, <strong>Michael Nichols</strong> here!
            </span>
            <br />I am a FullStack Developer and System Admin, who will provide
            development and deployment!
          </h1>
          <div className="w-full text-2xl text-center pt-12  ">
            <a href="https://cloudcrux.com">
              <Language className="cursor-pointer mx-5" />
            </a>
            <a href="https://www.youtube.com/c/GartiaJenkins-aly-aly-aly-alexstrasza">
              <YouTube className="cursor-pointer mx-5" />
            </a>
            <a href="https://github.com/gartia">
              <GitHub className="cursor-pointer mx-5" />
            </a>
            <a href="https://www.facebook.com/mikey.nichols.5">
              <Facebook className="cursor-pointer mx-5" />
            </a>
            <br />
            <p className="pt-3 text-sm">
              You might find me by my alias Gartia Jenkins
            </p>
          </div>
          <div
            style={{ bottom: "5%" }}
            className="w-full text-2xl place-self-center text-center absolute"
          >
            <div
              onClick={() => {
                document.getElementById("AboutMe").scrollIntoView({
                  behavior: "smooth",
                  alignToTop: true,
                });
              }}
              style={{ opacity: 1 }}
              onScroll={onScroll}
              className="cursor-pointer "
            >
              <ArrowDownward className="animate-bounce"></ArrowDownward>Scroll
              Down
              <ArrowDownward className="animate-bounce"></ArrowDownward>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Synopsis;
