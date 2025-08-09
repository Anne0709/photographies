import { useEffect, useState } from "react";
import "./HomePage.css";
import { Link } from "react-router";

function HomePage() {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/photo")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  if (!photos) {
    return <h1>Il y a un problème 🤨 </h1>;
  }
  return (
    <main className="home-page">
      <Link to="/add" className="add-photo-link">
        +
      </Link>
      <img className="big-logo" src="/logo-noir-et-blanc.png" alt="logo" />
      <h1>Bienvenue dans ma petite gallerie</h1>

      {photos.map((photo) => (
        <Link to={`/edit/${photo.id}`} key={photo.id} className="photo-link">
          <figure key={photo.id}>
            <img src={photo.image} alt={photo.title} />
            <figcaption>{photo.title}</figcaption>
          </figure>
        </Link>
      ))}
    </main>
  );
}

export default HomePage;
