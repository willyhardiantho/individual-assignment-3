import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AnimeItem() {
  const { id } = useParams();

  const [anime, setAnime] = useState({});
  const [showMore, setShowMore] = useState(false);

  const {
    title,
    synopsis,
    trailer,
    duration,
    aired,
    season,
    images,
    rank,
    score,
    scored_by,
    popularity,
    status,
    rating,
    source,
  } = anime;

  const getAnime = async (anime) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
    const data = await response.json();
    setAnime(data.data);
  };

  useEffect(() => {
    getAnime(id);
  }, [id]);

  return (
    <div className="p-20">
      <h1 className="flex justify-center mb-5 text-red-500 text-4xl font-quicksand font-bold">
        {title}
      </h1>
      <div className="bg-red-200 rounded-lg p-8 border-5 border-gray-300 w-2/3 mb-20 mx-auto">
        <div className="grid grid-cols-2">
          <div className=" mb-10">
            <img
              src={images?.jpg.large_image_url}
              alt={title}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-between mb-10 font-quicksand font-medium text-xl">
            <p>
              <span className="font-bold">Aired: </span>
              <span>{aired?.string}</span>
            </p>
            <p>
              <span className="font-bold">Rating: </span>
              <span>{rating}</span>
            </p>
            <p>
              <span className="font-bold">Rank: </span>
              <span>{rank}</span>
            </p>
            <p>
              <span className="font-bold">Score: </span>
              <span>{score}</span>
            </p>
            <p>
              <span className="font-bold">Scored By: </span>
              <span>{scored_by}</span>
            </p>
            <p>
              <span className="font-bold">Popularity: </span>
              <span>{popularity}</span>
            </p>
            <p>
              <span className="font-bold">Status: </span>
              <span>{status}</span>
            </p>
            <p>
              <span className="font-bold">Source: </span>
              <span>{source}</span>
            </p>
            <p>
              <span className="font-bold">Season: </span>
              <span>{season}</span>
            </p>
            <p>
              <span className="font-bold">Duration: </span>
              <span>{duration}</span>
            </p>
          </div>
        </div>
        <p className="font-quicksand font-medium text-xl">
          {showMore ? synopsis : synopsis?.substring(0, 450) + "... "}
          <button
            onClick={() => {
              setShowMore(!showMore);
            }}
            className="text-red-500">
            {showMore ? "Show Less" : "Read More"}
          </button>
        </p>
      </div>
      <h3 className="flex justify-center mb-5 text-red-500 text-4xl font-quicksand font-bold">
        Trailer
      </h3>
      <div className="bg-red-200 rounded-lg p-8 border-5 border-gray-300 w-2/3 mb-20 mx-auto flex justify-center">
        {trailer?.embed_url ? (
          <iframe
            src={trailer?.embed_url}
            title="Inline Frame Example"
            width="800"
            height="450"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        ) : (
          <h3 className="text-red-500 text-xl font-quicksand font-bold">
            Trailer not available
          </h3>
        )}
      </div>
    </div>
  );
}

export default AnimeItem;
