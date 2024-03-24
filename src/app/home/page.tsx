import React from "react";
import Jumbotron from "./Jumbotron";
import Profile from "./Profile";
import Navbar from "@/components/navbar/page";
import Testimonial from "./testimonial";

const Homes = () => {
  return (
    <>
      <Jumbotron />
      <Profile />
      <Testimonial />
    </>
  );
};

export default Homes;
