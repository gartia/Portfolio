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
  return (
    <>
      <div
        id="Home"
        className="h-full content-center text-slate-200 font-roboto py-10"
      >
        <div className="h-full pt-12 pb-8 place-content-center">
          <div className="h-full flex flex-wrap justify-center">
            <img
              src={profile}
              className="max-w-full max-h-full w-1/4 shadow-lg rounded-full align-middle border-4 border-slate-400"
              title="Michael Nichols the fullstack software developer."
              alt="Besides being a FullStack Developer and System Admin i love going out and hiking especially the eastern sierra's which is behind me!"
            />
          </div>
        </div>
        <h1 className="text-xl text-center">
          <span className="pt-4 text-4xl text-center">
            Hey, <strong>Michael Nichols</strong> here!
          </span>
          <br />I am a FullStack Developer and System Admin, who will provide
          development and deployment!
        </h1>
        <div className="w-full text-2xl text-center pt-5 mt-20 ">
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
          <p className="text-sm">
            You might find me by my alias Gartia Jenkins
          </p>
        </div>
        <div className="text-2xl text-center relative mt-20">
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
    </>
  );
};

export default Synopsis;
