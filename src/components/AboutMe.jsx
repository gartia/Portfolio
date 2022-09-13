import Moment from "react-moment";
import { useEffect, useState } from "react";
import moment from "moment";
import profile from "../images/FullStack Developer.jpg";

/*
The about me componenet has a real time counter from the minute i was born
It also contains a quick summary of when i started programming
*/

const AboutMe = () => {
  const [state, setState] = useState({ birthDay: 24 });

  useEffect(() => {
    const timer = setTimeout(
      () =>
        setState({
          birthDay: moment()
            .diff("1998-03-19T12:12-0800", "years", true)
            .toFixed(10),
        }),
      1000
    );

    return () => clearTimeout(timer);
  }, [state]);

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
          <div className="p-4 md:w-full sm:h-full place-content-center">
            <div className="flex flex-wrap justify-center">
              <div className="p-4 md:w-full sm:h-full place-content-center">
                <div className="flex flex-wrap justify-center place-content-center">
                  <div className="md:w-1/2 p-4 mt-4 px-4 py-4  flex flex-wrap place-content-center">
                    <h2 className="md:w-1/2 ">
                      <img
                        src={profile}
                        className=" shadow-lg rounded-lg align-middle border-4 border-slate-400"
                        title="Michael Nichols Programming in ReactJS"
                        alt="Michael Nichols Programming the front end of michael-nichols.com using ReactJS and TailwindCSS"
                      />
                    </h2>
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
                        <li>: {state.birthDay}</li>
                        <li>: Glendale, CA</li>
                        <li>: Available</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-full sm:h-full place-content-center">
              <div className="flex flex-wrap justify-center">
                <div className="md:w-1/2 p-4 mt-4 px-4 py-4 bg-slate-400/20 backdrop-blur-xl rounded-md">
                  <p>
                    As a child I always had a passion for video games. They were
                    a key inspiration to start creating. It was thanks to video
                    games that I began my journey of learning and understanding
                    programing more. This one passion allowed me to find a way
                    to make a living doing exactly what I love. I had my humble
                    beginnings of modding different video games but quickly grew
                    to me learning different languages such as LUA and C#, which
                    then turned towards web development with PHP and now
                    JavaScript as my main language. I was also inspired to learn
                    things such as Unreal Engine's C++, and Facebook's ReactJS.
                    There is nothing more worthwile than being able to see the
                    products that I provide as a FullStack Developer however,
                    when I'm not working on a job or personal project, I still
                    enjoy sitting down and playing a fun video game or two when
                    I can.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-full sm:h-full place-content-center">
              <div className="flex flex-wrap justify-center place-content-center">
                <div className="md:w-1/2 p-4 mt-4 px-4 py-4 bg-slate-400/20 backdrop-blur-xl rounded-md flex flex-wrap place-content-center">
                  <div className="flex text-left md:mx-10 sm:my-20 md:my-0 my-5 md:my-0">
                    <ul className="list-disc pl-8">
                      <li>JavaScript</li>
                      <li>C#</li>
                      <li>Java</li>
                      <li>C++</li>
                      <li>PHP</li>
                      <li>Erlang</li>
                    </ul>
                    <ul className="pl-4">
                      <li>- ReactJS · ExpressJS</li>
                      <li>- Mono · .NET</li>
                      <li>- Kotlin</li>
                      <li>- UnrealC++</li>
                      <li>- Laravel</li>
                      <li>- Elixir</li>
                    </ul>
                  </div>
                  <div className="flex text-left md:mx-10 sm:my-20 md:my-0 my-5 md:my-0">
                    <ul className="list-disc pl-8">
                      <li>Linux(Debian Flavors)</li>
                      <li>Windows Server (2012-2022)</li>
                      <li>Proxmox HyperVisor</li>
                      <li>Azure HyperVisor</li>
                      <li>LXC</li>
                      <li>Docker</li>
                    </ul>
                    <ul className="list-disc pl-8">
                      <li>MariaDB</li>
                      <li>GraphQL</li>
                      <li>MongoDB</li>
                      <li>PostgreSQL</li>
                      <li>Unreal Engine</li>
                      <li>Unity Engine</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
