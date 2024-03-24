// import Footer from "@/components/Footer";

interface User {
  gender: string;
  name: { title: string; first: string; last: string };
  phone: number;
  picture: { large: string };
}

interface RandomUserResponse {
  results: User[];
}

const URLVP = "https://randomuser.me/api/?results=2";
const URLMG = "https://randomuser.me/api/?results=1";
const URLMK = "https://randomuser.me/api/?results=1";
const URLPT = "https://randomuser.me/api/?results=3";

const Teamss = async () => {
  const responsevp = await fetch(URLVP, { cache: "no-store" });
  const responsemg = await fetch(URLMG, { cache: "no-store" });
  const responsemk = await fetch(URLMK, { cache: "no-store" });
  const responsept = await fetch(URLPT, { cache: "no-store" });
  const { results }: RandomUserResponse = await responsevp.json();
  const { results: resultsmg }: RandomUserResponse = await responsemg.json();
  const { results: resultsmk }: RandomUserResponse = await responsemk.json();
  const { results: resultspt }: RandomUserResponse = await responsept.json();

  return (
    <main>
      <h1 className="flexCenter text-3xl font-bold text-gray-30">Our Team</h1>

      <div className="justify-center lg:flex flex-rows gap-12 mt-10">
        <div className="mb-8 lg:mb-0">
          <h1 className="text-xl font-semibold mb-2">Founder</h1>
          {results.map((item) => {
            return (
              <div>
                <img
                  src={item.picture.large}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <p>
                  {item.name.first} - {item.phone}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mb-8 lg:mb-0">
          <h1 className="text-xl font-semibold mb-2">Manager</h1>
          {resultsmg.map((itemmg) => {
            return (
              <div>
                <img
                  src={itemmg.picture.large}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <p>
                  {itemmg.name.first} - {itemmg.phone}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mb-8 lg:mb-0">
          <h1 className="text-xl font-semibold mb-2">Marketing Staff</h1>
          {resultsmk.map((itemmk) => {
            return (
              <div>
                <img
                  src={itemmk.picture.large}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <p>
                  {itemmk.name.first} - {itemmk.phone}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mb-8 lg:mb-0">
          <h1 className="text-xl font-semibold mb-2">Production Staff</h1>
          {resultspt.map((itempt) => {
            return (
              <div>
                <img
                  src={itempt.picture.large}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <p>
                  {itempt.name.first} - {itempt.phone}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="justify-start mt-20">{/* <Footer /> */}</div>
    </main>
  );
};

export default Teamss;
