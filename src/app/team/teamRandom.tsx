import { Data } from "@/types/randomTeam.api";
import Image from "next/image";
import React from "react";

interface TeamRandomProps {
  gender: string;
  name: { title: string; first: string; last: string };
  phone: string;
  picture: { large: string };
  location: { country: string };
  email: string;
}

const TeamRandom: React.FC<TeamRandomProps> = ({
  gender,
  name,
  phone,
  picture,
  location,
  email,
}) => {
  return (
    <>
      <div>
        <div className="card w-72 bg-base-100 shadow-xl gap-4 mx-auto">
          <figure>
            <Image
              src={picture.large}
              alt="teams"
              width={200}
              height={200}
              quality={100}
              className="w-40 h-40"
            ></Image>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name.first}
              <div className="badge badge-secondary">{phone}</div>
            </h2>
            <p></p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{location.country}</div>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{email}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamRandom;
