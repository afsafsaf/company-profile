import { Character } from "@/types/marvel";
import Image from "next/image";
import React from "react";

interface CardProps {
  character: Character;
}

const Card: React.FC<CardProps> = ({ character }) => {
  character.thumbnail.path;
  //   console.log(character);

  return (
    <>
      <div className="mx-auto mt-5 ">
        <div className="card card-compact lg:w-80 md:w-60 w-52 bg-base-100 shadow-xl h-96">
          <figure className="transform-gpu cursor-pointer">
            <Image
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt="marvel_characters"
              width={500}
              height={500}
            ></Image>
          </figure>
          <div className="card-body opacity-50">
            <h2 className="card-title text-center">{character.name}</h2>
            <p className="line-clamp-2 text-justify">{}</p>
            <div className="card-actions justify-center">
              <button className="btn btn-info mx-auto">
                Click for more information
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
