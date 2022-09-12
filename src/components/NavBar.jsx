const NavBar = ({ NavBarRefs }) => {
  return (
    <>
      <nav className="select-none bg-opacity-50 bg-slate-800 backdrop-blur-xl z-40 fixed top-0 w-full text-white font-roboto flex items-center m-0 px-8 h-12">
        <div className="absolute text-3xl ">Michael</div>
        <div className="w-full text-center items-center">
          <a
            onClick={() => {
              document.getElementById("Home").scrollIntoView({
                behavior: "smooth",
                alignToTop: true,
              });
            }}
            className="hidden md:inline pr-4 inline-block cursor-pointer text-lg  tracking-wider text-heading before:text-primary !text-primary"
          >
            Home
          </a>
          <a
            onClick={() => {
              document.getElementById("AboutMe").scrollIntoView({
                behavior: "smooth",
                alignToTop: true,
              });
            }}
            className="hidden md:inline pr-4 inline-block cursor-pointer text-lg  tracking-wider text-heading before:text-primary !text-primary"
          >
            About
          </a>
          <a
            onClick={() => {
              document.getElementById("Experience").scrollIntoView({
                behavior: "smooth",
                alignToTop: true,
              });
            }}
            className="hidden pr-4 inline-block cursor-pointer text-lg  tracking-wider text-heading before:text-primary !text-primary"
          >
            Experience
          </a>
          <a
            onClick={() => {
              document.getElementById("Projects").scrollIntoView({
                behavior: "smooth",
                alignToTop: true,
              });
            }}
            className="hidden md:inline pr-4 inline-block cursor-pointer text-lg  tracking-wider text-heading before:text-primary !text-primary"
          >
            Projects
          </a>
          <a
            onClick={() => {
              document.getElementById("Contact").scrollIntoView({
                behavior: "smooth",
                alignToTop: true,
              });
            }}
            className="hidden md:inline pr-4 inline-block cursor-pointer text-lg  tracking-wider text-heading before:text-primary !text-primary"
          >
            Contact
          </a>
        </div>
        <div className="outline-none absolute inline md:hidden flex cursor-pointer text-lg  tracking-wider text-heading bottom-1/5 right-1/4">
          <button className="outline-none mobile-menu-button">
            <svg
              className=" w-6 h-6 text-slate-800 hover:text-green-500 "
              x-show="!showMenu"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
