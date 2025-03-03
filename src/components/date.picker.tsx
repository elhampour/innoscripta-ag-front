import { FormControl } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React from "react";
import CustomDatePickerInterface from "./custom.date.picker.interface";

const CustomDatePicker = ({ item }: { item: CustomDatePickerInterface }) => {
  // const [value, setValue] = React.useState<Dayjs | null>();
  return (
    <FormControl sx={{ m: 1, width: "100%" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Date"
          value={item.value}
          onChange={(newValue) => item.onChange(newValue)}
        />
      </LocalizationProvider>
    </FormControl>
  );
};

export default CustomDatePicker;
