import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import CustomSelectInterface from "./custom.select.interface";
import LookupDataInterface from "@/stores/lookup.data.interface";

const CustomSelect = ({
  item,
  items,
}: {
  item: CustomSelectInterface;
  items: LookupDataInterface[];
}) => {
  const [personName, setPersonName] = React.useState<string[]>([]);
  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <FormControl sx={{ m: 1, width: "100%" }}>
      <InputLabel>{item.title}</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        multiple
        value={personName}
        onChange={handleChange}
        input={<OutlinedInput label="Name" />}
      >
        {items.map((name) => (
          <MenuItem key={name.id} value={name.name}>
            {name.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
