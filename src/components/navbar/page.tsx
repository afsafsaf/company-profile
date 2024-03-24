"use client";
import Home from "@/app/home/page";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <div className="md:grid md:grid-cols-5  bg-neutral-700 bg-opacity-90 border-b-2 h-32">
        <button onClick={() => router.push("/home")} className="text-xl p-5 ">
          <Image
            src="/marvl.png"
            alt="mcu_profile"
            width={300}
            height={300}
            className=" "
          ></Image>
        </button>
        <div className=" hidden lg:flex mx-auto md:col-span-3  ">
          <ul className="menu menu-horizontal px-1 m-10 text-slate-400 font-bold gap-8 bg-base-200 rounded-box">
            <li>
              <a onClick={() => router.push("/home")}>HOME</a>
            </li>
            <li>
              <a onClick={() => router.push("/about")}>ABOUT US</a>
            </li>
            {/* <li> */}
            {/* <details> */}

            <li>
              <a onClick={() => router.push("/services")}>SERVICES</a>
            </li>

            {/* <ul className="p-2 text-white">
                  <li>
                    <a>Our Product</a>
                  </li>
                  <li>
                    <a>Hot Deals</a>
                  </li>
                </ul> */}
            {/* </details> */}
            {/* </li> */}
            <li>
              <a onClick={() => router.push("/team")}>TEAMS</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="dropdown dropdown-bottom dropdown-end lg:hidden flex absolute md:right-0 top-7 right-0  ">
            <div tabIndex={0} role="button" className=" m-1">
              <Image
                src="/iconlist.png"
                alt="menu"
                width={70}
                height={70}
              ></Image>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
                <a onClick={() => router.push("/home")}>HOME</a>
              </li>
              <li>
                <a onClick={() => router.push("/about")}>ABOUT US</a>
              </li>
              <li>
                <a onClick={() => router.push("/services")}>SERVICES</a>
              </li>
              <li>
                <a onClick={() => router.push("/team")}>TEAMS</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
