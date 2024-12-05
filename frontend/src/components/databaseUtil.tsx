// databaseUtils.ts
const mockDatabase = [
    {
      patientId: "001",
      patientName: "John Doe",
      gender: "Male",
      acqDate: "2024-01-01",
      prInterval: "120",
      qtInterval: "400",
      ventricleRate: "70",
    },
    {
      patientId: "002",
      patientName: "Jane Smith",
      gender: "Female",
      acqDate: "2024-02-15",
      prInterval: "130",
      qtInterval: "390",
      ventricleRate: "75",
    },
    {
      patientId: "003",
      patientName: "Alex Brown",
      gender: "Other",
      acqDate: "2024-03-10",
      prInterval: "125",
      qtInterval: "410",
      ventricleRate: "68",
    },
  ];
  
  export const searchDatabase = (criteria) => {
    console.log('Searching Database')
    return mockDatabase.filter((record) => {
      return (
        (!criteria.patientId || record.patientId.includes(criteria.patientId)) &&
        (!criteria.patientName || record.patientName.toLowerCase().includes(criteria.patientName.toLowerCase())) &&
        (!criteria.gender || record.gender === criteria.gender) &&
        (!criteria.acqDate || record.acqDate === criteria.acqDate) &&
        (!criteria.prInterval || record.prInterval === criteria.prInterval) &&
        (!criteria.qtInterval || record.qtInterval === criteria.qtInterval) &&
        (!criteria.ventricleRate || record.ventricleRate === criteria.ventricleRate)
      );
    });
  };
  