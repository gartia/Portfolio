import Moment from "react-moment";
import profile from "../images/programming.jpg";

/*
The about me componenet has a real time counter from the minute i was born
It also contains a quick summary of when i started programming
*/
const AboutMe = () => {
  return (
    <>
      <div
        id="AboutMe"
        className="w-full h-full text-slate-50 font-roboto flex relative py-10"
      >
        <div className="h-4/5 w-full ">
          <div className="pt-12 pb-16 content-center text-center justify-between items-center text-4xl">
            About Me
          </div>
          <div className="p-4 md:w-full sm:h-full content-center text-center items-center md:flex">
            <img
              src={profile}
              className="md:w-1/4 sm:h-1/4 shadow-lg rounded-lg align-middle border-4 border-slate-400"
              alt="It me"
            />
            <div className="p-1 flex-wrap">
              <div className="flex text-left">
                <ul className="list-disc pl-8">
                  <li>First Name</li>
                  <li>Last Name</li>
                  <li>Age</li>
                  <li>Location</li>
                  <li>Capacity</li>
                </ul>
                <ul className="pl-4">
                  <li>: Michael</li>
                  <li>: Nichols</li>
                  <li>
                    <div>
                      <div className="hidden  md:inline">
                        :{" "}
                        <Moment
                          diff="1998-03-19T12:12-0800"
                          unit="years"
                          decimal
                          interval={1000}
                        ></Moment>
                      </div>{" "}
                      <div className="md:hidden">
                        :{" "}
                        <Moment
                          diff="1998-03-19T12:12-0800"
                          unit="years"
                          interval={1000}
                        ></Moment>
                      </div>{" "}
                    </div>
                  </li>
                  <li>: Glendale, CA</li>
                  <li>: Available</li>
                </ul>
              </div>
              <div className="md:w-1/2 p-4 mt-4 px-4 py-4 bg-slate-400/20 backdrop-blur-xl rounded-md">
                <p className="">
                  As a child I always had a passion for video games. They were a
                  key inspiration to start creating. It was thanks to video
                  games that I began my journey of learning and understanding
                  programing more. This one passion allowed me to find a way to
                  make a living doing exactly what I love. I had my humble
                  beginnings of modding different video games but quickly grew
                  to me learning different languages such as LUA and C#, which
                  then turned towards web development with PHP and now
                  JavaScript as my main language. I was also inspired to learn
                  things such as Unreal Engine's C++, and Facebook's ReactJS.
                  There is nothing more worthwile than being able to see the
                  products that I produce as a Full-Stack Developer however,
                  when I'm not working on a job or personal project, I still
                  enjoy sitting down and playing a fun video game or two when I
                  can.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
