import React from "react";

const Jumbotron = () => {
  return (
    <>
      <div className="md:grid md:grid-cols-2 md:gap-4 md:m-5 md:mt-10 mt-2">
        <div className="container rounded-xl bg-slate-600 bg-opacity-60 p-5 backdrop-blur-sm mx-auto">
          <h1 className="md:text-5xl text-3xl font-bold ">
            Figure Collection For Everyone
          </h1>
          <h3 className="md:mt-2 mt-5 text-white text-justify text-base">
            Embark on an extraordinary journey into the heart of heroism with
            Marvel Company Unitoys, your premier destination for the finest
            Marvel superhero designs and collectible figures. Immerse yourself
            in the awe-inspiring world of legendary superheroes, meticulously
            crafted to perfection and brought to life in stunning detail.
          </h3>
          <button className="bg-orange-600 text-gray-50 p-1 rounded ">
            Learn More
          </button>
        </div>

        <div className="container rounded-xl row-span-2 p-1 mb-4 md:mt-0 mt-5">
          <div className="card w-96 bg-red-950 bg-opacity-90 backdrop-blur-sm shadow-xl mx-auto">
            <h6 className="card-title text-center mx-auto mt-2 ">
              New design is available
            </h6>
            <div className="mx-auto ">
              <video autoPlay loop muted className="w-72 h-72 p-3">
                <source src="/flying.mp4" />
              </video>
            </div>

            <div className="card-body text-start">
              <p className="">
                Ours new details of the latest iron man with more features.
                Customization is available for figure, posters, suits, and
                others
              </p>
              <div className="card-actions justify-end ">
                <button className="btn btn-primary text-bold">
                  Order Now!
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-slate-600 bg-opacity-60 p-5 text-center h-32  backdrop-blur-sm  ">
          <h1 className="text-3xl font-bold">Lets Join Us!</h1>
          <h3 className="text-xl text-white ">
            To feel the experience with the marvel characters
          </h3>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
