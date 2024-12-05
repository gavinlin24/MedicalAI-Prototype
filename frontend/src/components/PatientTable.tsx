import React from "react";
import { Link } from "react-router-dom";

interface Patient {
  patientId: string;
  firstName: string;
  lastName: string;
  acquisitionDate: string;
}

interface PatientTableProps {
  patients: Patient[]; // Expecting a list of patients
}

const PatientTable: React.FC<PatientTableProps> = ({ patients }) => {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>First Name</th>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>Last Name</th>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>Acquisition Date</th>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>XML</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient, index) => (
          <tr key={index}>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{patient.firstName}</td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{patient.lastName}</td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{patient.acquisitionDate}</td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              <Link to={`/patient/${patient.patientId}`}>View XML</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PatientTable;


