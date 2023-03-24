import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

// styles
import "./FavoriteCharacter.css";

export default function FavoriteCharacters() {
  const {
    data: characters,
    isPending,
    error,
  } = useFetch("http://localhost:3012/characters");

  console.log(characters);

  return (
    <div className="top-most-div">
      <div className="top-div">
        <div className="container-lg pt-5 pb-5">
          <div className="row gy-5">
            {error && <p>{error}</p>}
            {isPending && <p>Loading...</p>}
            {characters &&
              characters.map((character) => (
                <div
                  key={character.id}
                  className="col-xxl-3 col-lg-4 col-md-6 card-wrapper"
                >
                  <Link to={`/favoritecharacters/character/${character.id}`}>
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        src={character.pic}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <p className="card-text  m-0">Name: {character.name}</p>
                        <p className="card-text ">Anime: {character.anime}</p>
                        <p className="card-text  m-0">Back story:</p>
                        <p className="card-text ">
                          {character.backgroundStory.substring(0, 120)}...
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
