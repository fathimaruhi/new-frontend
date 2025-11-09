import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    // ✅ Save message locally (simulates backend for now)
    const stored = JSON.parse(localStorage.getItem("messages") || "[]");
    stored.push(form);
    localStorage.setItem("messages", JSON.stringify(stored));

    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <h2>💌 Contact PetalGlow</h2>

      {sent && (
        <p className="success-msg">
          ✅ Message Sent! We'll contact you soon.
        </p>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
