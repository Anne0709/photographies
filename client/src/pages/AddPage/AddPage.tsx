import { useNavigate, useParams } from "react-router";
import "./AddPage.css";

function Add() {
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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (!res.ok) {
        throw new Error("Échec de l'ajout de la photo");
      }
      navigate("/");
    });
  };
  return (
    <main className="add-photo">
      <section>
        <h1>Ajouter votre photo</h1>
        <form className="form" action={handleOnSubmit}>
          <label htmlFor="title">Titre</label>
          <input id="title" type="text" name="title" />

          <label htmlFor="place">Lieu</label>
          <input id="place" type="text" name="place" />

          <label htmlFor="image">Image URL</label>
          <input id="image" type="text" name="image" />

          <button className="add" type="submit">
            Ajouter
          </button>
        </form>
      </section>
    </main>
  );
}

export default Add;
