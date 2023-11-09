import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/global";

function Airing({ rendered }) {
  const { airingAnime, isSearch, searchResults } = useGlobalContext();

  const conditionalRender = () => {
    if (!isSearch && rendered === "airing") {
      return airingAnime?.map((anime) => {
        return (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img
              src={anime.images.jpg.large_image_url}
              alt=""
              className="rounded-lg h-80 w-60 object-cover transform transition-transform duration-300 hover:scale-110"
            />
          </Link>
        );
      });
    } else {
      return searchResults?.map((anime) => {
        return (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
            <img
              src={anime.images.jpg.large_image_url}
              alt=""
              className="rounded-lg h-80 w-60 object-cover transform transition-transform duration-300 hover:scale-110"
            />
          </Link>
        );
      });
    }
  };

  return (
    <div>
      <div className="mt-5 mb-5 pt-8 pb-8 w-5/6 mx-auto flex flex-wrap gap-5 justify-center bg-red-100 rounded-lg">
        {conditionalRender()}
      </div>
    </div>
  );
}

Airing.propTypes;

export default Airing;
