import { useEffect, useState } from "react";
import "./UpdatePage.css";
import { useParams } from "react-router";

function Update() {
  const [photo, setPhoto] = useState<Photo>();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3310/api/photo/${id}`)

      .then((res) => res.json())
      .then((data) => setPhoto(data[0]));
  }, [id]);

  if (!photo) {
    return <h1>Oups 😖</h1>;
  }
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3310/api/photo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObject),
    })
      .then((res) => res.json())
      .then(() => {
        <h1>Vous pouvez modifier votre photo</h1>;

        return fetch(`http://localhost:3310/api/photo/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setPhoto(data[0]);
          });
      });
  };

  return (
    <main className="update">
      <h1>Modifier votre photo</h1>
      <section>
        <form className="form" onSubmit={handleOnSubmit}>
          <label htmlFor="title">Titre</label>
          <input type="text" name="title" defaultValue={photo.title} />

          <label htmlFor="place">Lieu</label>
          <input type="text" name="place" defaultValue={photo.place} />

          <label htmlFor="image">Image</label>
          <input type="text" name="image" defaultValue={photo.image} />

          <button type="submit">Modifier</button>
        </form>
      </section>
    </main>
  );
}

export default Update;
