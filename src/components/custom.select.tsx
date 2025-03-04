import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";
import React from "react";
import { SelectChangeEvent } from "@mui/material";

import LookupDataInterface from "@/stores/common/lookup.data.interface";

import CustomSelectInterface from "./custom.select.interface";

const CustomSelect = ({
  item,
  items,
}: {
  item: CustomSelectInterface;
  items: LookupDataInterface[];
}) => {
  const handleChange = (event: SelectChangeEvent<string | string[]>) => {
    const {
      target: { value },
    } = event;

    item.onChange(Array.isArray(value) ? value : value.split(","));
  };
  return (
    <FormControl sx={{ m: 1, width: "100%" }}>
      <InputLabel>{item.title}</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        multiple={item.multiple}
        value={item.value}
        onChange={handleChange}
        input={<OutlinedInput label="Name" />}
      >
        {items &&
          items.map((name) => (
            <MenuItem key={name.id} value={name.id}>
              {name.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
