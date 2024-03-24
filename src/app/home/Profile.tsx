import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <>
      <div className="bg-red-950 bg-opacity-90 p-5 text-center m-5 rounded-xl  backdrop-blur-sm">
        <h1 className="text-center text-white text-2xl p-5 font-semibold">
          "WE'RE MORE THAN JUST COLLECTORS, WE'RE STORYTELLERS"
        </h1>
        <h3 className="w-3/4 md:text-center mx-auto p-5 md:text-xl text-justify">
          Each figure tells a tale, whether it's a dramatic showdown between
          archenemies or a heartwarming team-up against insurmountable odds.
          With Excelsior Collectibles, you're not just adding a figure to your
          collection; you're adding a piece of the Marvel mythos to your home.
        </h3>
      </div>

      <div className="stats stats-vertical md:stats-horizontal shadow text-center w-full bg-slate-600 bg-opacity-60 backdrop-blur-sm">
        <div className="stat text-red-800">
          <div className="stat-title text-slate-950 font-bold">Our Members</div>
          <div className="stat-value text-white">25K</div>
          <div className="stat-desc text-neutral-950">/ last month</div>
        </div>

        <div className="stat  text-red-800">
          <div className="stat-title text-slate-950 font-bold">
            Product Sold
          </div>
          <div className="stat-value text-white">6,754</div>
          <div className="stat-desc text-neutral-950">
            ↗︎ 400 (22%) / march 24
          </div>
        </div>

        <div className="stat  text-red-800">
          <div className="stat-title text-slate-950 font-bold">
            The Best Company and Marvel's Community
          </div>
          <div className="stat-value text-white">Top 5</div>
          <div className="stat-desc text-neutral-950">↘︎ 90 (14%)</div>
        </div>
      </div>
    </>
  );
};

export default Profile;
