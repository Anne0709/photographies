import { useEffect, useState } from "react";
import "./HomePage.css";
import { Link } from "react-router";

function HomePage() {
  const [photo, setPhoto] = useState<Photo>();

  useEffect(() => {
    fetch("http://localhost:3310/api/photo")
      .then((res) => res.json())
      .then((data) => setPhoto(data));
  });
  if (!photo) {
    return <h1>probleme</h1>;
  }

  return (
    <main className="home-page">
      <h1>Je suis la home page</h1>
      <Link to="/" className="add-photo-link">
        {/* path=? */}
        Ajouter
      </Link>
      <figure>
        <img src={photo.image} alt={photo.title} />
        <figcaption>{photo.title}</figcaption>
      </figure>
    </main>
  );
}

export default HomePage;
