import { Link } from "react-router";
import "./UpdatePage.css";

function Update() {
  return (
    <main className="update">
      <h1>Modifier votre photo</h1>
      <section>
        <form className="form">
          <label htmlFor="title">Titre</label>
          <input type="text" name="title" />

          <label htmlFor="lieu">Titre</label>
          <input type="text" name="lieu" />

          <label htmlFor="image">Image</label>
          <input type="text" name="image" />

          <Link to="/">
            <button type="submit">Modifier</button>
          </Link>
        </form>
      </section>
    </main>
  );
}

export default Update;
