"use client";
import React, { useState } from "react";

import "./pagecs.css";

const HoroscopeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    timeOfBirth: "",
    gender: "",
    state: "",
    city: "",
    includeGemstones: false,
    includePooja: false,
    includeMeditation: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Your Horoscope and Kundali are being generated!");
  };

  return (
    <div className="horoscope-container">
      <div className="horoscope-wrapper">
        <h2>Generate Your Horoscope </h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Time of Birth</label>
            <input
              type="time"
              name="timeOfBirth"
              value={formData.timeOfBirth}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="none">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="input-group">
            <label>State</label>
            <input
              type="text"
              name="state"
              placeholder="Enter your state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Generate Horoscope
          </button>
        </form>
      </div>
    </div>
  );
};

export default HoroscopeForm;
