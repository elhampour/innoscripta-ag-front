import { FormControl } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import React from "react";

const CustomDatePicker = () => {
  const [value, setValue] = React.useState<Dayjs | null>();
  return (
    <FormControl sx={{ m: 1, width: "100%" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Date" value={value} onChange={(newValue) => setValue(newValue)} />
      </LocalizationProvider>
    </FormControl>
  );
};

export default CustomDatePicker;
