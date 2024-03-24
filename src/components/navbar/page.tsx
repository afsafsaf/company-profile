"use client";

import Image from "next/image";
import Link from "next/link";
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
              <Link href={"/home"}>HOME</Link>
            </li>
            <li>
              <Link href={"/about"}>ABOUT US</Link>
            </li>
            {/* <li> */}
            {/* <details> */}

            <li>
              <Link href={"/services"}>SERVICES</Link>
            </li>

            <li>
              <Link href={"/team"}>TEAMS</Link>
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
                <Link href={"/home"}>HOME</Link>
              </li>
              <li>
                <Link href={"/about"}>ABOUT US</Link>
              </li>
              <li>
                <Link href={"/services"}>SERVICES</Link>
              </li>
              <li>
                <Link href={"/team"}>TEAMS</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
