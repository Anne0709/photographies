import { useEffect, useState } from "react";
import "./LandscapePage.css";

function Landscape() {
  const [photo, setPhoto] = useState<Photo>([]);

  useEffect(() => {
    fetch(`http://localhost:3310/api/photo`)
      .then((res) => res.json())
      .then((data) => setPhoto(data));
  });

  return (
    <main>
      <h1>paysages</h1>
      <figure>
        <img src={photo.image} alt={photo.title} />
      </figure>
    </main>
  );
}

export default Landscape;
