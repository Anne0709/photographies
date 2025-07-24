import { Link, useNavigate, useParams } from "react-router";
import "./AddPage.css";
// import { useState } from "react";

function Add() {
  // const [photo, setphoto] = useState<Photo>();
  const { photoId } = useParams();
  const navigate = useNavigate();

  const handleOnSubmit = (data: FormData) => {
    const values = Object.fromEntries(data);
    const formData = {
      ...values,
      photoId: Number(photoId),
    };
    fetch("http://localhost:3310/api/photo", {
      method: "POST",
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.status === 200) {
        navigate("");
      }
    });
  };
  return (
    <main className="add-photo">
      <section>
        <h1>Ajouter votre photo</h1>
        <form className="form" action={handleOnSubmit}>
          <label htmlFor="title">Titre</label>
          <input type="text" name="title" />

          <label htmlFor="lieu">Lieu</label>
          <input type="text" name="lieu" />

          <label htmlFor="image">Image</label>
          <input type="text" name="image" />
          <Link to="/">
            <button type="submit">Ajouter</button>
          </Link>
        </form>
      </section>
    </main>
  );
}

export default Add;
