import profile from "../images/newprofilepic2.jpg";

import { ArrowDownward } from "@mui/icons-material";
const map_range = (value, low1, high1, low2, high2) => {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
};
const onScroll = () => {
  const scrollTop = this.myRef.current.scrollTop;
  console.log(`myRef.scrollTop: ${scrollTop}`);
  this.setState({
    scrollTop: scrollTop,
  });
};
const Synopsis = () => {
  return (
    <>
      <div
        id="Home"
        className="h-screen content-center text-slate-200 font-roboto py-10"
      >
        <div className="pt-12 pb-8 place-content-center">
          <div className="flex flex-wrap justify-center">
            <img
              src={profile}
              className="max-w-full max-h-full w-1/4 shadow-lg rounded-full align-middle border-4 border-slate-400"
              alt="It me"
            />
          </div>
        </div>
        <h1 className="pt-4 text-4xl text-center">
          Hey, Michael Nichols here!
        </h1>
        <p className="text-xl text-center">
          I am a Full-Stack Developer, who can provide backend, frontend, or
          deployment for any project you require!
        </p>

        <div className="text-4xl text-center relative inset-y-1/4">
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
