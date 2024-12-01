import React, { useState } from "react";

function Kontakt() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Dziękujemy za kontakt!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <h1>Kontakt</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Imię:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Wiadomość:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
}

export default Kontakt;
