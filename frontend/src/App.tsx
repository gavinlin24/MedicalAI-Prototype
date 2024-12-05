import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PatientTable from "./components/PatientTable";
import PatientDetails from "./components/PatientDetails";
import PatientForm from "./components/PatientForm";
import axios from "axios";

interface Patient {
  patientId: string;
  firstName: string;
  lastName: string;
  acquisitionDate: string;
}

const App: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

  const fetchPatients = async (params: { [key: string]: string } = {}) => {
    try {
      const query = new URLSearchParams(params).toString();
      const response = await axios.get(`http://localhost:8000/api/?${query}`);
      const xmlData = response.data; // Assuming the response is the XML string.

      // Parse the XML data
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlData, "application/xml");
      const restingECGs = xmlDoc.getElementsByTagName("RestingECG");

      // Map each <RestingECG> to a Patient object
      const parsedPatients: Patient[] = Array.from(restingECGs).map((node) => {
        const patientId = node.getElementsByTagName("patient_id")[0]?.textContent || "";
        const firstName = node.getElementsByTagName("first_name")[0]?.textContent || "";
        const lastName = node.getElementsByTagName("last_name")[0]?.textContent || "";
        const acquisitionDate =
          node.getElementsByTagName("acquisition_date")[0]?.textContent || "";

        return {
          patientId,
          firstName,
          lastName,
          acquisitionDate,
        };
      });

      // Update state with parsed patients
      setPatients(parsedPatients);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <PatientForm onSubmit={fetchPatients} />
              <PatientTable patients={patients} />
            </div>
          }
        />
        <Route path="/patient/:patientId" element={<PatientDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
