import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

// styles
import "./FavoriteCharacters.css";

// components
import Breadcrumbs from "../Breadcrumbs";
import axios from "axios";

export default function FavoriteCharacters() {
  // http://localhost:3012/characters
  const {
    data: characters,
    setData: setCharacters,
    isPending,
    error,
  } = useFetch("http://localhost:3020/api/favoritecharacters/");

  // const [characters, setCharacters] = useState(null);
  // const [isPending, setIsPending] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function fetch() {
  //     setIsPending(true);
  //     setError(null);

  //     await axios
  //       .get("http://localhost:3020/api/favoritecharacters/")
  //       .then(function (response) {
  //         setIsPending(false);
  //         setError(null);
  //         console.log(response.statusText, response.status);
  //         setCharacters(response.data);
  //       })
  //       .catch(function (error) {
  //         setIsPending(false);
  //         setError("Could not fetch data");
  //         console.log(error);
  //       });
  //   }

  //   fetch();
  // }, []);

  console.log(characters);

  const handleDelete = (e, characterId) => {
    e.preventDefault();

    // delete from db on the server
    axios
      .delete(
        `http://localhost:3020/api/favoritecharacters/characters/${characterId}`
      )
      .then(function (response) {
        // delete locally for to update state & rerender
        // const updatedList = characters.filter(
        //   (item) => item._id !== characterId
        // );
        // setCharacters(updatedList);

        setCharacters((prevCharacters) =>
          prevCharacters.filter((item) => item._id !== characterId)
        );

        console.log("In Frontend: delete character:", characterId);
        console.log("after removed: " + characters);
        console.log(response.data.msg);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    // <div style={{ overflow: "auto", height: "100vh" }}>
    <div className="top-most-div">
      <Breadcrumbs />
      <div className="top-div">
        <div className="container-lg pt-5 pb-5">
          <div className="row gy-5">
            {error && <p>{error}</p>}
            {isPending && <p>Loading...</p>}
            {characters &&
              characters.map((character) => (
                <div
                  key={character._id}
                  className="col-xxl-3 col-lg-4 col-md-6 card-wrapper"
                >
                  <Link to={`/favoritecharacters/${character._id}`}>
                    <div className="card" style={{ width: "18rem" }}>
                      <div>
                        <span
                          style={{
                            width: "27px",
                            height: "27px",
                          }}
                          className="material-symbols-outlined trash-icon"
                          onClick={(e) => {
                            e.preventDefault();
                            handleDelete(e, character._id);
                          }}
                        >
                          delete
                        </span>
                        <img
                          src={"http://localhost:3020" + character.pics[0]}
                          className="card-img-top"
                          alt="..."
                        />
                      </div>

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
    //</div>
  );
}
