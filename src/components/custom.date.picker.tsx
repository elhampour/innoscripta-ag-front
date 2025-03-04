import { FormControl } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";

import CustomDatePickerInterface from "./custom.date.picker.interface";

dayjs.extend(utc);

const CustomDatePicker = ({ item }: { item: CustomDatePickerInterface }) => {
  const handleChange = (newValue: Dayjs | null) => {
    item.onChange(newValue); // Now it's safely typed as Dayjs or null
  };
  return (
    <FormControl sx={{ m: 1, width: "100%" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Date"
          value={item.value} // Pass Dayjs or null
          onChange={handleChange} // The onChange handler is correctly typed
        />
      </LocalizationProvider>
    </FormControl>
  );
};

export default CustomDatePicker;
