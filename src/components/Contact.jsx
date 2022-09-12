//The contact form will have to be handed off to a node server
const Contact = (Ref) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submited!");
    let jsonbody = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    console.log(jsonbody);
    fetch("https://michael-nichols.com/contact", {
      method: "POST",
      body: JSON.stringify(jsonbody),
    }).then((response) => {
      console.log(response);
      return response.json(); // do something with response JSON
    });
  };
  return (
    <>
      <div
        id="Contact"
        className="w-full h-full text-slate-50 font-roboto flex relative py-10"
      >
        <div className="h-4/5 w-full ">
          <div className="pt-12 pb-16 content-center text-center justify-between items-center text-4xl">
            Contact Me
          </div>
          <div className="flex relative w-3/4 m-auto">
            <div className="w-1/2 pr-8 space-y-4  place-content-end content-center text-start justify-between items-center">
              <div className=" text-4xl">Contact Information</div>
              <p className="text-lg">
                Feel free to contact me on any platform! Texting me will be the
                fastest way of contact though.
              </p>
              <div className="mr-32 pl-4 py-4 bg-slate-400/20 backdrop-blur-xl rounded-md">
                <div className="text-2xl">Contact By Phone</div>
                +1 760-408-1788
              </div>
              <div className=" mr-32 pl-4 py-4 bg-slate-400/20 backdrop-blur-xl rounded-md">
                <div className="text-2xl">Contact By E-Mail</div>
                MNichols@cloudcrux.net <br />
                admin@cloudcrux.net
              </div>
              <div className="mr-32 pl-4 py-4 bg-slate-400/20 backdrop-blur-xl rounded-md">
                <div className="text-2xl">Contact By Mail</div>
                30 N Gould St Ste R · Sheridan · WY 82801
              </div>
            </div>
            <div className="w-1/2">
              <div className="h-full pr-8 space-y-4  place-content-end content-center text-start justify-between items-center">
                <div className=" h-full  mr-32 pl-4 py-4 bg-slate-400/20 backdrop-blur-xl rounded-md">
                  <form onSubmit={handleSubmit}>
                    <div className="py-4 flex flex-wrap">
                      <label className="w-full">Name</label>{" "}
                      <textarea
                        name="name"
                        className="
                          resize-none form-control block w-5/6  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-800 focus:outline-none"
                        rows="1"
                        placeholder=" Your Name"
                      ></textarea>
                    </div>
                    <div className="py-4 flex flex-wrap">
                      <label className="w-full">Email</label>{" "}
                      <textarea
                        name="email"
                        className="
                          resize-none form-control block w-5/6  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-800 focus:outline-none"
                        rows="1"
                        placeholder=" Your Email"
                      ></textarea>
                    </div>
                    <div className="py-4 flex flex-wrap">
                      <label className="w-full">Subject</label>{" "}
                      <textarea
                        name="subject"
                        className="
                          resize-none form-control block w-5/6  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-800 focus:outline-none"
                        rows="1"
                        placeholder=" Title"
                      ></textarea>
                    </div>
                    <div className="py-4 flex flex-wrap">
                      <label className="w-full">Message</label>
                      <textarea
                        name="message"
                        className="
                          resize form-control block w-5/6  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-800 focus:outline-none"
                        rows="4"
                        placeholder=" Your Message"
                      ></textarea>
                    </div>
                    <input type="submit" value="Submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
