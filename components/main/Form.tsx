"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./Form.css"; // Importing the CSS file (ensure the correct path)

const HoroscopeForm = () => {
  const [isClient, setIsClient] = useState(false); // To ensure client-side rendering
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

  // Ensuring the component renders only on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

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

  if (!isClient) return null; // Prevents server-side rendering issues

  return (
    <div id="formto" className="horoscope-container">
      <div className="image-section">
        <Image
          className="imageChange"
          style={{
            marginLeft: "150px",
            marginTop: "-100px",
          }}
          src="/img3.png" // Ensure img3.png is in the public folder
          alt="Rotating Image"
          width={2000} // Set the width
          height={2000} // Set the height
        />
      </div>
      <div className="horoscope-wrapper">
        <form onSubmit={handleSubmit} className="form">
          <div className="input-group">
            <label style={{ fontSize: "25px" }}>Name</label>
            <input
              style={{ width: "400px", fontSize: "17px" }}
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label style={{ fontSize: "25px" }}>Date of Birth</label>
            <input
              style={{ width: "400px", fontSize: "17px" }}
              type="text"
              name="dob"
              placeholder="DD/MM/YYYY"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label style={{ fontSize: "25px" }}>Time of Birth</label>
            <input
              style={{ width: "400px", fontSize: "17px" }}
              type="text"
              name="timeOfBirth"
              placeholder="HH:MM"
              value={formData.timeOfBirth}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label style={{ fontSize: "25px" }}>Gender</label>
            <select
              style={{
                width: "400px",
                fontSize: "17px",
                backgroundColor: "black",
              }}
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
            <label style={{ fontSize: "25px" }}>State</label>
            <input
              style={{
                width: "400px",
                fontSize: "17px",
                backgroundColor: "black",
              }}
              type="text"
              name="state"
              placeholder="Enter your state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label style={{ fontSize: "25px" }}>City</label>
            <input
              style={{
                width: "400px",
                fontSize: "17px",
                backgroundColor: "black",
              }}
              type="text"
              name="city"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <button
            style={{
              width: "400px",
              fontSize: "17px",
              backgroundColor: "black",
            }}
            type="submit"
            className="submit-button"
          >
            Generate Horoscope
          </button>
        </form>
      </div>
    </div>
  );
};

export default HoroscopeForm;
