import React, { useState } from "react";
import "./SearchWindow.css";

import {
  Button,
  Input,
  Stack,
  Box,
  NumberInput,
  NumberInputField,
  Flex,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { searchDatabase } from "./databaseUtil";

interface Props {
  onSearchClick: (data: any) => void;
}

const SearchWindow = ({ onSearchClick }: Props) => {
  const [patientId, setPatientId] = useState<string>("");
  const [patientName, setPatientName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [acqDate, setAcqDate] = useState<string | null>(null);
  const [prInterval, setPrInterval] = useState<string>("");
  const [qtInterval, setQtInterval] = useState<string>("");
  const [ventricleRate, setVentricleRate] = useState<string>("");

  const handleGenderClick = (selectedGender: string) => {
    setGender(selectedGender);
  };

  const handleDateChange = (date: Date | null) => {
    if (!date){
      return
    }
    const year = date?.getFullYear();
    const month = date?.getMonth() + 1;
    const day = date?.getDate();
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;

    console.log(formattedDate);
    setAcqDate(formattedDate);
  };

  const handleSearchClick = () => {
    const searchData = {
      patientId,
      patientName,
      gender,
      acqDate,
      prInterval,
      qtInterval,
      ventricleRate,
    };

    const results = searchDatabase(searchData);
    console.log(results);
    onSearchClick(results);
  };

  return (
    <div>
      <form>
        <div>
          Patient ID
          <Input
            placeholder="Enter Patient ID"
            height="25px"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
          />
        </div>
        <div>
          Patient Name
          <Input
            placeholder="Enter Patient Name"
            height="25px"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />
        </div>
        <div>
          Gender
          <Stack direction="row" justify="center">
            {["Male", "Female", "Other"].map((genderOption) => (
              <Button
                key={genderOption}
                className="gen btn"
                onClick={() => handleGenderClick(genderOption)}
                style={{
                  backgroundColor:
                    gender === genderOption ? "lightblue" : "white",
                }}
              >
                {genderOption}
              </Button>
            ))}
          </Stack>
        </div>
        <div>Acquisition Date</div>
        <DatePicker
          selected={acqDate}
          onChange={handleDateChange}
          placeholderText="Please Select a Date"
        />
        <div>PR Interval</div>
        <Flex justifyContent="center" alignItems="center">
          <Box>
            <NumberInput
              value={prInterval}
              onChange={(valueString) => setPrInterval(valueString)}
              width="200px"
            >
              <NumberInputField />
            </NumberInput>
          </Box>
        </Flex>
        <div>QT Interval</div>
        <Flex justifyContent="center" alignItems="center">
          <Box>
            <NumberInput
              value={qtInterval}
              onChange={(valueString) => setQtInterval(valueString)}
              width="200px"
            >
              <NumberInputField />
            </NumberInput>
          </Box>
        </Flex>
        <div>Ventricle Rate</div>
        <Flex justifyContent="center" alignItems="center">
          <Box>
            <NumberInput
              value={ventricleRate}
              onChange={(valueString) => setVentricleRate(valueString)}
              width="200px"
            >
              <NumberInputField />
            </NumberInput>
          </Box>
        </Flex>
        <Button className="btn" type="button" onClick={handleSearchClick}>
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchWindow;
