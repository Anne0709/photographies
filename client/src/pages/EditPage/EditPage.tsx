import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import "./EditPage.css";

function Edit() {
  const [photo, setPhoto] = useState<Photo>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3310/api/photo/${id}`)

      .then((res) => res.json())
      .then((data) => setPhoto(data[0]));
  }, [id]);

  if (!photo) {
    return <h1>Oups 😳</h1>;
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
        <h1>Photo modifiée 🎊</h1>;

        return fetch(`http://localhost:3310/api/photo/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setPhoto(data[0]);
          });
      });
  };
  const handleOnDelete = () => {
    fetch(`http://localhost:3310/api/photo/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        navigate("/");
      }
    });
  };

  return (
    <main className="edit">
      <h1>Page Supprimer et modifier</h1>
      <section>
        <figure key={id}>
          <img src={`http://localhost:3310${photo.image}`} alt={photo.title} />
          <figcaption>{photo.title}</figcaption>
        </figure>

        <article onSubmit={handleOnSubmit}>
          <Link to={`/update/${photo.id}`} key={id}>
            Modifier
          </Link>
          <button type="button" onClick={handleOnDelete}>
            Supprimer{" "}
          </button>{" "}
        </article>
      </section>
    </main>
  );
}

export default Edit;
