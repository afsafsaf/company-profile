import React from "react";
import Jumbotron from "./Jumbotron";
import Profile from "./Profile";

import Testimonial from "./testimonial";

const Homes = () => {
  return (
    <>
      <div className="container">
        <Jumbotron />
        <Profile />
        <Testimonial />
      </div>
    </>
  );
};

export default Homes;
