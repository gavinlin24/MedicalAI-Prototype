import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import xmlFormatter from "xml-formatter";

const PatientDetails: React.FC = () => {
  const { patientId } = useParams<{ patientId: string }>();
  const [formattedXml, setFormattedXml] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchXmlData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:8000/api/?patient_id=${patientId}`, {
          headers: { Accept: "application/xml" },
        });

        // Format the XML data
        const formatted = xmlFormatter(response.data, { indentation: "  " });
        setFormattedXml(formatted);
      } catch (error) {
        console.error("Error fetching patient XML:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchXmlData();
  }, [patientId]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Patient XML Data</h1>
      {loading ? (
        <p>Loading...</p>
      ) : formattedXml ? (
        <pre
          style={{
            whiteSpace: "pre-wrap",
            backgroundColor: "#f5f5f5",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            overflowX: "auto",
          }}
        >
          {formattedXml}
        </pre>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default PatientDetails;
