import "./ContactPage.css";

function Contact() {
  return (
    <main className="contact">
      <img src="/logo-noir-et-blanc.png" alt="logo" />
      <h1>Contactez-moi</h1>
      <form className="form">
        <label htmlFor="firstname">Nom</label>
        <input id="firstname" type="text" name="firstname" />

        <label htmlFor="lastname">Prénom</label>
        <input id="lastname" type="text" name="lastname" />

        <label htmlFor="email">E-Mail</label>
        <input id="email" type="text" name="email" />

        <label htmlFor="object">Objet</label>
        <input id="object" type="text" name="object" />

        <label htmlFor="message">Message</label>
        <input id="message" type="text" name="message" />

        <button type="submit">Envoyer</button>
      </form>
    </main>
  );
}

export default Contact;
