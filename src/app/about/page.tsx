import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="grid md:grid-col-3 grid-col-1 mx-5 text-center mt-5 bg-red-950 bg-opacity-70 backdrop-blur-sm gap-5 rounded-lg py-2 ">
        <div className="container col-span-3  ">
          <h1 className="text-3xl font-bold">THREE MOTTOS THAT WE APPLY</h1>
        </div>

        <div className="col-span-1 flex justify-center">
          <Image src="/face.png" alt="icon" width={30} height={30}></Image>
          Service Oriented
        </div>
        <div className="col-span-1 flex justify-center ">
          <Image src="/face.png" alt="icon" width={30} height={30}></Image>
          Hospitality Oriented
        </div>
        <div className="col-span-1 flex justify-center">
          <Image src="/face.png" alt="icon" width={30} height={30}></Image>
          Creativity Oriented
        </div>
      </div>
      <div className="grid xl:grid-cols-5 grid-col-1 m-5 gap-5 text-justify pb-5 xl:mx-20 mx-auto  ">
        <div className="bg-red-950 bg-opacity-70 backdrop-blur-sm rounded-lg p-2 w-3/4 text-lg xl:col-span-4 mx-auto">
          Welcome to Marvel Company Unitoys, where the extraordinary world of
          Marvel comes to life in stunning detail. We're not just a company;
          we're a passionate community of Marvel aficionados dedicated to
          crafting the most iconic and beloved characters into meticulously
          detailed figures that capture the essence of the Marvel Universe.
          <br /> <br />
          With Marvel Company Unitoys, we believe that every hero, villain, and
          sidekick deserves their moment in the spotlight. Our team of skilled
          artisans and designers work tirelessly to ensure that each figure is a
          true masterpiece, meticulously sculpted and painted to perfection.
          From the mighty Avengers to the cosmic Guardians of the Galaxy, no
          character is too obscure or too mighty for us to immortalize in resin.
        </div>
        <div className="rounded-xl md:block hidden mx-auto">
          <Image
            src="/ironman.jpg"
            alt="ironman"
            width={200}
            height={200}
            className="w-56 h-fit rounded-lg"
          ></Image>
        </div>
      </div>
      <div className="bg-red-950 bg-opacity-70 backdrop-blur-sm rounded-lg p-2 text-lg m-5 text-center">
        So join us, true believers, as we embark on this epic adventure through
        the Marvel Universe. With Excelsior Collectibles, the only limit is your
        imagination.
      </div>
    </>
  );
};

export default page;
