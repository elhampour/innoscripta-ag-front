import { TextField } from "@mui/material";

const CustomSearchInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <TextField
    fullWidth
    label="Search News"
    variant="outlined"
    margin="normal"
    value={value}
    onChange={onChange}
  />
);

export default CustomSearchInput;
