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
      <h1>Je suis la home page</h1>
      <Link to="/add" className="add-photo-link">
        Ajouter
      </Link>
      {photos.map((photo) => (
        <Link to={`/edit/${photo.id}`} key={photo.id} className="photo-link">
          <figure>
            <img
              src={`http://localhost:3310${photo.image}`}
              alt={photo.title}
              loading="lazy"
            />
            <figcaption>{photo.title}</figcaption>
          </figure>
        </Link>
      ))}
    </main>
  );
}

export default HomePage;
