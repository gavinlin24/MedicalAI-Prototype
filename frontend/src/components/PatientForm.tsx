import React, { useState } from "react";
import logo from "../assets/logo.png"

interface PatientFormProps {
  onSubmit: (params: { [key: string]: string }) => void;
}

const PatientForm: React.FC<PatientFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    start_date: "",
    end_date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filteredParams = Object.fromEntries(
      Object.entries(formData).filter(([_, value]) => value.trim() !== "")
    );
    onSubmit(filteredParams);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px", display: "flex", flexWrap: "wrap", alignItems: "center" }}>
      {/* Logo and First Name Field */}
      <div style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
        <img
          src={logo}
          style={{ width: "100px", height: "70px", marginRight: "10px" }}
        />
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleChange}
          style={{ padding: "5px" }}
        />
      </div>

      {/* Last Name Field */}
      <input
        type="text"
        name="last_name"
        placeholder="Last Name"
        value={formData.last_name}
        onChange={handleChange}
        style={{ marginRight: "10px", padding: "5px" }}
      />

      {/* Start Date Field */}
      <input
        type="date"
        name="start_date"
        placeholder="Start Date"
        value={formData.start_date}
        onChange={handleChange}
        style={{ marginRight: "10px", padding: "5px" }}
      />

      {/* End Date Field */}
      <input
        type="date"
        name="end_date"
        placeholder="End Date"
        value={formData.end_date}
        onChange={handleChange}
        style={{ marginRight: "10px", padding: "5px" }}
      />

      {/* Submit Button */}
      <button type="submit" style={{ padding: "5px 10px" }}>
        Search
      </button>
    </form>
  );
};

export default PatientForm;







