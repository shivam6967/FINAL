"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./Form.css";

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

  // Generic handler for inputs
  const updateFormField =
    (fieldName: string, type: string) => (value: string | boolean) => {
      setFormData((prevData) => ({
        ...prevData,
        [fieldName]: type === "checkbox" ? value : value,
      }));
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Your Horoscope and Kundali are being generated!");
  };

  return (
    <div id="formto" className="horoscope-container">
      <div className="image-section">
        <Image
          className="imageChange"
          style={{
            marginLeft: "150px",
            marginTop: "-100px",
          }}
          src="/img3.png"
          alt="Rotating Image"
          width={2000}
          height={2000}
        />
      </div>
      <div className="horoscope-wrapper">
        <form onSubmit={handleSubmit} className="form">
          <div className="input-group">
            <label style={{ fontSize: "25px" }}>Name</label>
            <input
              style={{ width: "400px", fontSize: "17px" }}
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => updateFormField("name", "text")(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label style={{ fontSize: "25px" }}>Date of Birth</label>
            <input
              style={{ width: "400px", fontSize: "17px" }}
              type="text"
              placeholder="DD/MM/YYYY"
              value={formData.dob}
              onChange={(e) => updateFormField("dob", "text")(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label style={{ fontSize: "25px" }}>Time of Birth</label>
            <input
              style={{ width: "400px", fontSize: "17px" }}
              type="text"
              placeholder="HH:MM"
              value={formData.timeOfBirth}
              onChange={(e) =>
                updateFormField("timeOfBirth", "text")(e.target.value)
              }
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
              value={formData.gender}
              onChange={(e) =>
                updateFormField("gender", "select")(e.target.value)
              }
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
              style={{ width: "400px", fontSize: "17px" }}
              type="text"
              placeholder="Enter your state"
              value={formData.state}
              onChange={(e) => updateFormField("state", "text")(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label style={{ fontSize: "25px" }}>City</label>
            <input
              style={{ width: "400px", fontSize: "17px" }}
              type="text"
              placeholder="Enter your city"
              value={formData.city}
              onChange={(e) => updateFormField("city", "text")(e.target.value)}
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
