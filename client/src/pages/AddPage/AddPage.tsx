import "./AddPage.css";

function Add() {
  return (
    <main className="add-photo">
      <section>
        <h1>Page Ajouter</h1>
        <form className="form">
          <label htmlFor="title">Titre</label>
          <input type="text" name="title" />

          <label htmlFor="lieu">Titre</label>
          <input type="text" name="lieu" />

          <label htmlFor="image">Image</label>
          <input type="text" name="image" />

          <button type="submit">Ajouter</button>
        </form>
      </section>
    </main>
  );
}

export default Add;
