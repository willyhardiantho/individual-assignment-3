import { useState } from "react";
import { useGlobalContext } from "../../context/global";
import Popular from "../Layouts/Popular";
import Upcoming from "../Layouts/Upcoming";
import Airing from "../Layouts/Airing";

function Homepage() {
  const {
    handleSubmit,
    search,
    handleChange,
    getUpcomingAnime,
    getAiringAnime,
  } = useGlobalContext();

  const [rendered, setRendered] = useState("popular");

  const switchComponent = () => {
    switch (rendered) {
      case "popular":
        return <Popular rendered={rendered} />;
      case "airing":
        return <Airing rendered={rendered} />;
      case "upcoming":
        return <Upcoming rendered={rendered} />;
      default:
        return <Popular rendered={rendered} />;
    }
  };

  return (
    <div>
      <header className="py-8 px-20">
        <div className="flex items-center justify-center mb-8">
          <h1 className="text-red-500 text-4xl font-quicksand font-bold">
            {rendered === "popular"
              ? "Popular Anime"
              : rendered === "airing"
              ? "Airing Anime"
              : "Upcoming Anime"}
          </h1>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="filter-btn popular-filter">
            <button
              onClick={() => {
                setRendered("popular");
              }}
              className="flex items-center gap-2 px-6 py-2 rounded-full text-lg font-quicksand font-medium bg-white cursor-pointer border-4 border-red-300 hover:border-red-400">
              Popular
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setRendered("airing");
                getAiringAnime();
              }}
              className="flex items-center gap-2 px-6 py-2 rounded-full text-lg font-quicksand font-medium bg-white cursor-pointer border-4 border-red-300 hover:border-red-400">
              Airing
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setRendered("upcoming");
                getUpcomingAnime();
              }}
              className="flex items-center gap-2 px-6 py-2 rounded-full text-lg font-quicksand font-medium bg-white cursor-pointer border-4 border-red-300 hover:border-red-400">
              Upcoming
            </button>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="flex">
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={handleChange}
                className="w-full h-10 p-5 border-4 rounded-lg border-grey font-quicksand font-medium text-lg"
              />
              <button type="submit" className="ml-3">
                <i className="fa-solid fa-magnifying-glass text-red-500 text-2xl"></i>
              </button>
            </div>
          </form>
        </div>
      </header>
      {switchComponent()}
    </div>
  );
}

export default Homepage;
