import { useEffect, useRef, useState } from "react";
import { useFetch2 } from "../../hooks/useFetch2";
import { useNavigate } from "react-router-dom";

// styles
import "./Create.css";

export default function Create() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const navigate = useNavigate();

  const { postData, error, isPending, data } = useFetch2(
    "http://localhost:3012/datas",
    "POST"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({
      name,
      url,
    });
  };

  // redirect a user when we get data response
  useEffect(() => {
    if (data) {
      navigate("/animesites");
    }
  }, [data]);

  return (
    <div className="create">
      <h2 className="page-title">Add Site</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Site name:</span>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </label>

        <label>
          <span>Link:</span>
          <input
            type="text"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
            required
          />
        </label>

        <button className="btn">submit</button>
      </form>
    </div>
  );
}
