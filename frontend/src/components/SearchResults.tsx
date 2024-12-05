import React from "react";

interface Props {
  data: any[]; // Expecting an array of results
}

const SearchResults = ({ data }: Props) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h3>Search Results</h3>
      <table>
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Patient Name</th>
            <th>Gender</th>
            <th>Acquisition Date</th>
            <th>PR Interval</th>
            <th>QT Interval</th>
            <th>Ventricle Rate</th>
          </tr>
        </thead>
        <tbody>
          {data.map((patient, index) => (
            <tr key={index}>
              <td>{patient.patientId}</td>
              <td>{patient.patientName}</td>
              <td>{patient.gender}</td>
              <td>{patient.acqDate}</td>
              <td>{patient.prInterval}</td>
              <td>{patient.qtInterval}</td>
              <td>{patient.ventricleRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
