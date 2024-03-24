import React from "react";
import TeamRandom from "./teamRandom";

const url = "https://randomuser.me/api?results=6";
const url1 = "https://randomuser.me/api?results=1";
const url2 = "https://randomuser.me/api?results=1";
const url3 = "https://randomuser.me/api?results=1";
const url4 = "https://randomuser.me/api?results=1";

export default async function Team() {
  const response = await fetch(url, { cache: "no-store" });
  const response1 = await fetch(url1, { cache: "no-store" });
  const response2 = await fetch(url2, { cache: "no-store" });
  const response3 = await fetch(url3, { cache: "no-store" });
  const response4 = await fetch(url4, { cache: "no-store" });

  const { results } = await response.json();
  const { results: results1 } = await response1.json();
  const { results: results2 } = await response2.json();
  const { results: results3 } = await response3.json();
  const { results: results4 } = await response4.json();
  const hasil = results[0];

  console.log(response2);

  return (
    <>
      <div className="mt-10">
        <hr className="w-1/2 text-center mx-auto border-2" />
        <h1 className="text-center mx-auto text-xl w-1/4 font-bold bg-slate-600 rounded-xl backdrop-blur-sm opacity-95">
          Meet The Teams
        </h1>
        <h1 className="text-center mx-auto text-xl w-16 font-bold bg-slate-600 rounded-full backdrop-blur-sm opacity-95 mt-10">
          CEO
        </h1>
      </div>

      {/* CEO */}
      <div className="mx-auto text-center mt-2 ">
        {results1.map(
          (
            result: {
              picture: { large: string };
              location: { country: string };
              img: string;
              name: { title: string; first: string; last: string };
              phone: string;
              gender: string;
              large: string;
              email: string;
            },
            index: React.Key | null | undefined
          ) => (
            <TeamRandom
              key={index}
              picture={result.picture}
              name={result.name}
              phone={result.phone}
              gender={result.gender}
              location={result.location}
              email={result.email}
            />
          )
        )}
      </div>

      {/* MANAGER */}
      <div className="grid md:grid-cols-3 grid-cols-1 m-5 gap-5 mx-auto text-center">
        <div>
          <p className="text-xl w-1/2 mx-auto font-bold bg-slate-600 rounded-xl backdrop-blur-sm opacity-95">
            Financial Manager
          </p>
          <div className="mt-2">
            {results2.map(
              (
                result: {
                  picture: { large: string };
                  location: { country: string };
                  img: string;
                  name: { title: string; first: string; last: string };
                  phone: string;
                  gender: string;
                  large: string;
                  email: string;
                },
                index: React.Key | null | undefined
              ) => (
                <TeamRandom
                  key={index}
                  picture={result.picture}
                  name={result.name}
                  phone={result.phone}
                  gender={result.gender}
                  location={result.location}
                  email={result.email}
                />
              )
            )}
          </div>
        </div>
        <div>
          <p className="text-xl w-1/2 mx-auto font-bold bg-slate-600 rounded-xl backdrop-blur-sm opacity-95">
            Operations Manager
          </p>
          <div className="mt-2">
            {results3.map(
              (
                result: {
                  picture: { large: string };
                  location: { country: string };
                  img: string;
                  name: { title: string; first: string; last: string };
                  phone: string;
                  gender: string;
                  large: string;
                  email: string;
                },
                index: React.Key | null | undefined
              ) => (
                <TeamRandom
                  key={index}
                  picture={result.picture}
                  name={result.name}
                  phone={result.phone}
                  gender={result.gender}
                  location={result.location}
                  email={result.email}
                />
              )
            )}
          </div>
        </div>
        <div>
          <p className="text-xl mx-auto w-1/2 font-bold bg-slate-600 rounded-xl backdrop-blur-sm opacity-95">
            Marketing Manager
          </p>
          <div className="mt-2">
            {results4.map(
              (
                result: {
                  picture: { large: string };
                  location: { country: string };
                  img: string;
                  name: { title: string; first: string; last: string };
                  phone: string;
                  gender: string;
                  large: string;
                  email: string;
                },
                index: React.Key | null | undefined
              ) => (
                <TeamRandom
                  key={index}
                  picture={result.picture}
                  name={result.name}
                  phone={result.phone}
                  gender={result.gender}
                  location={result.location}
                  email={result.email}
                />
              )
            )}
          </div>
        </div>
      </div>

      {/* STAFF */}
      <div>
        <p className="text-xl mx-auto text-center font-bold bg-slate-600 rounded-xl backdrop-blur-sm opacity-95">
          STAFF
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-col-2 mt-10 m-5 gap-5 ">
        {results.map(
          (
            result: {
              picture: { large: string };
              location: { country: string };
              img: string;
              name: { title: string; first: string; last: string };
              phone: string;
              gender: string;
              large: string;
              email: string;
            },
            index: React.Key | null | undefined
          ) => (
            <TeamRandom
              key={index}
              picture={result.picture}
              name={result.name}
              phone={result.phone}
              gender={result.gender}
              location={result.location}
              email={result.email}
            />
          )
        )}
      </div>
    </>
  );
}
