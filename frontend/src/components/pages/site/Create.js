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
    // <div className="create">
    //   <h2 className="page-title">Add Site</h2>

    //   <form onSubmit={handleSubmit}>
    //     <label>
    //       <span>Site name:</span>
    //       <input
    //         type="text"
    //         onChange={(e) => setName(e.target.value)}
    //         value={name}
    //         required
    //       />
    //     </label>

    //     <label>
    //       <span>Link:</span>
    //       <input
    //         type="text"
    //         onChange={(e) => setUrl(e.target.value)}
    //         value={url}
    //         required
    //       />
    //     </label>

    //     <button className="btn">submit</button>
    //   </form>
    //   </div>

    <div className="create p-5">
      <form className="card p-5 cstm-bg text-white fs-5 shadow">
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="inputEmail3"
              placeholder="Email"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword3" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="inputPassword3"
              placeholder="Password"
            />
          </div>
        </div>
        <fieldset class="form-group">
          <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
            <div class="col-sm-10">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios1"
                  value="option1"
                  checked
                />
                <label class="form-check-label" for="gridRadios1">
                  First radio
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios2"
                  value="option2"
                />
                <label class="form-check-label" for="gridRadios2">
                  Second radio
                </label>
              </div>
              <div class="form-check disabled">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios3"
                  value="option3"
                  disabled
                />
                <label class="form-check-label" for="gridRadios3">
                  Third disabled radio
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div class="form-group row">
          <div class="col-sm-2">Checkbox</div>
          <div class="col-sm-10">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck1" />
              <label class="form-check-label" for="gridCheck1">
                Example checkbox
              </label>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-primary">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
