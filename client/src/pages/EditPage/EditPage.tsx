import { Link, useNavigate, useParams } from "react-router";
import "./EditPage.css";
import { useEffect, useState } from "react";

function Edit() {
  const [photo, setPhoto] = useState<Photo>();
  const { photoId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3310/api/photo/${photoId}`)

      .then((res) => res.json())
      .then((data) => setPhoto(data[0]));
  }, [photoId]);

  if (!photo) {
    return <h1>Oups 😳</h1>;
  }

  const handleOnSubmit = () => {
    fetch(`http://localhost:3310/api/photo/${photoId}`, {
      method: "delete",
    }).then((res) => {
      if (res.status === 200) {
        navigate("/");
      }
    });
  };

  return (
    <main className="delete">
      <h1>Page Supprimer et modifier</h1>
      <section>
        <figure key={photoId}>
          <img src={photo.image} alt={photo.title} />
          <figcaption>{photo.title}</figcaption>
        </figure>
        <article>
          <Link to={`/photo/${photo.id}`}>
            <button type="button">Modifier</button>
          </Link>
          <Link to="">
            <button type="button" onClick={handleOnSubmit}>
              Supprimer
            </button>{" "}
          </Link>
        </article>
      </section>
    </main>
  );
}

export default Edit;
