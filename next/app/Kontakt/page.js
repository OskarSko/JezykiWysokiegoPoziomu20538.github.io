"use client";
import Link from 'next/link';
import { useState } from "react";

import Header from "@/components/Header";
import Button from "@/components/Button";

export default function Kontakt() {
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
        <main>
        <Header title="Kontakt" />
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
          <Button label="Wyślij" style={{ backgroundColor: "blue", color: "white" }} />
        </form>
        </main>
        <Link href="/">Wróć na stronę główną</Link>
      </div>
    );
  }