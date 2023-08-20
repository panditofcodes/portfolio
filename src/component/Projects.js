import React from "react";
import noteApp from "./noteApp.png"

export default function Projects() {
  return (
    <>
      <div className="card" style={{ width: "18rem" }} data-aos="fade-down">
        <img src={noteApp} className="card-img-top" alt="Photo" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            "Experience seamless note-taking with our responsive MERN-based app.
            Save, organize, and manage your notes with ease. Effortlessly move
            notes to the bin for temporary storage or restore them when needed.
            When it's time to let go, our app offers a secure delete feature for
            permanent removal. Stay connected across devices while enjoying a
            user-friendly design that adapts to your screen, ensuring a smooth
            and intuitive note-taking experience."
          </p>
          <a href="https://strange-clam-slippers.cyclic.cloud/" className="btn btn-primary">
            See Live
          </a>
          <a href="https://github.com/panditofcodes/notes-taking-app" className="btn btn-primary">
            Source Code
          </a>
        </div>
      </div>
    </>
  );
}
