import { Link, useNavigate, useParams } from "react-router";
import "./DeletePage.css";
import { useEffect, useState } from "react";

function Delete() {
  const [photo, setPhoto] = useState<Photo>();
  const { photoId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3310/api/photo/${photoId}`)

      .then((res) => res.json())
      .then((data) => setPhoto(data[0]));
  }, [photoId]);

  if (!photo) {
    return <h1>probleme</h1>;
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
        <figure>
          <img src={photo.image} alt={photo.title} />
          <figcaption>{}</figcaption>
        </figure>
        <article>
          <Link to={`/photo/${photo.id}`}>
            <button type="button">Modifier</button>
          </Link>
          <button type="button" onClick={handleOnSubmit}>
            Supprimer
          </button>
        </article>
      </section>
    </main>
  );
}

export default Delete;
