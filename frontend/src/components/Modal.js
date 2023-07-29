import React, { useState, useRef } from "react";
import axios from "axios";

// styles
import "./Modal.css";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [anime, setAnime] = useState("");
  const [backgroundStory, setBackgroundStory] = useState("");
  const [pics, setPics] = useState(null);
  const [picError, setPicError] = useState("");
  const [previewPic, setPreviewPic] = useState(null);
  const fileRef = useRef();

  //================================
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState(null);

  const toggleModal = () => {
    setShowModal(!showModal);
    // console.log(showModal);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const character = { name, anime, backgroundStory, pics };

  //   // for debug
  //   // console.log(JSON.stringify(character));
  //   // return;

  //   const response = await fetch("/api/favoritecharacters/characters", {
  //     method: "POST",
  //     body: JSON.stringify(character),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   const json = await response.json();

  //   if (!response.ok) {
  //     console.log("error");
  //   }

  //   if (response.ok) {
  //     console.log("new workout added", json);
  //     setName("");
  //     setAnime("");
  //     setBackgroundStory("");
  //     fileRef.current.value = null;
  //     setPreviewPic(null);
  //   }
  // };

  const handleSubmitWithAxios = async (e) => {
    e.preventDefault();

    if (!pics) {
      console.log("No file selected");
    }

    // const charData = { name, anime, backgroundStory, pics };
    // console.log(charData);

    // single file upload
    // const fd = new FormData();
    // fd.append("name", name);
    // fd.append("anime", anime);
    // fd.append("backgroundStory", backgroundStory);
    // fd.append("pics", pics);

    // multiple file upload
    const fd = new FormData();
    fd.append("name", name);
    fd.append("anime", anime);
    fd.append("backgroundStory", backgroundStory);
    pics.forEach((p) => fd.append("pics[]", p));
    // fd.append("pics", pics);

    // print each item in formData
    for (let item of fd) {
      console.log(item);
    }

    // print arr of files | pics = [f1, f2, f3, ...]
    console.log(pics);

    // const urlEncoded = new URLSearchParams(fd).toString();
    // console.log(urlEncoded);

    // return statement to stop request & for debugging
    // setTimeout(() => {
    //   handleFieldReset();
    // }, 5000);
    // return;

    setMsg("Uploading...");
    setProgress((prevState) => {
      return { ...prevState, started: true };
    });

    let axiosResponse;
    axios
      .post("http://localhost:3020/api/favoritecharacters/", fd, {
        onUploadProgress: (progressEvent) => {
          setProgress((prevState) => {
            return { ...prevState, pc: progressEvent.progress * 100 };
          });
        },
      })
      .then(function (res) {
        setMsg("Upload successful");
        console.log("new workout added", res.data);

        handleFieldReset();
      })
      .catch(function (err) {
        setMsg("Upload failed");
        console.log(err);
      });

    function handleFieldReset() {
      setName("");
      setAnime("");
      setBackgroundStory("");
      fileRef.current.value = null;
      setPreviewPic(null);
      setMsg("");
      setProgress({ started: false, pc: 0 });
    }
  };

  const handleFileChange = (e) => {
    setPics(null);
    setPreviewPic(null);

    let selected = e.target.files;

    handlePreviewPic(selected);
  };

  const handlePreviewPic = (fileListObj) => {
    // Convert FileList object to an array for easier iteration
    const filesArray = Array.from(fileListObj);

    // display image preview
    const selectedFIles = [];
    const targetFilesObject = [...fileListObj];
    targetFilesObject.map((file) => {
      return selectedFIles.push(URL.createObjectURL(file)); // generate path
    });

    setPics(filesArray);
    setPreviewPic(selectedFIles); // array of path

    // print for debugging purposes
    console.log(fileListObj);
    console.log(selectedFIles);
  };

  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={toggleModal}
      >
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal show"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="false"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content cstm-bg ">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form
                onSubmit={handleSubmitWithAxios}
                encType="multipart/form-data"
              >
                <div className="row mb-3">
                  <label htmlFor="input1" className="col-sm-2 col-form-label">
                    Character name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => {
                        setName(e.target.value);
                        // console.log(name);
                      }}
                      value={name}
                      id="input1"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="input2" className="col-sm-2 col-form-label">
                    Anime name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => {
                        setAnime(e.target.value);
                        // console.log(anime);
                      }}
                      value={anime}
                      id="input2"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="input3" className="col-sm-2 col-form-label">
                    Background Story
                  </label>
                  <div className="col-sm-10">
                    <textarea
                      type="text"
                      className="form-control"
                      onChange={(e) => {
                        setBackgroundStory(e.target.value);
                        // console.log(backgroundStory);
                      }}
                      value={backgroundStory}
                      id="input3"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="input4" className="col-sm-2 col-form-label">
                    Picture
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="file"
                      className="form-control"
                      onChange={handleFileChange}
                      multiple
                      ref={fileRef}
                      id="input4"
                    />
                  </div>
                </div>

                {previewPic &&
                  previewPic.map((url, index) => {
                    return (
                      <div key={index}>
                        <img src={url} alt="" />
                      </div>
                    );
                  })}
                <button className="btn btn-primary">Add character</button>
                {progress.started && (
                  <progress max="100" value={progress.pc}></progress>
                )}
                {msg && <span>{msg}</span>}
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {/* <button type="button" className="btn btn-primary">
                Add character
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
