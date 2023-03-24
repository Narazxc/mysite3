import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

// style
import "./CharacterDetail.css";

export default function CharacterDetail() {
  const { id } = useParams();
  const url = "http://localhost:3012/characters/" + id;

  const { error, data: character, isPending } = useFetch(url);

  console.log(character);

  return (
    <div className="character-detail-page-scope">
      <h2 className="text-white pt-5 pb-4 mb-5 px-5 text-center">
        Character Detail
      </h2>
      <div className="row px-5">
        {character && (
          <>
            <div className="col-xl-6 col-xxl-6 text-center">
              <img
                className="img-fluid mx-auto"
                src={character.pic}
                alt="..."
              />
            </div>

            <div className="col-xl-6 col-xxl-6 pe-5 mt-sm-5 mt-md-5 mt-lg-5 mt-xl-0">
              <p className="text-white">Name: {character.name}</p>
              <p className="text-white">Anime: {character.anime}</p>
              <p className="text-white background-story-title">
                Background story:
              </p>
              <p className="text-white background-story">
                {character.backgroundStory}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
