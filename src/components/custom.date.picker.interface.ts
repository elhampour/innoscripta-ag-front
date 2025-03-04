import { Dayjs } from "dayjs";

export default interface CustomDatePickerInterface {
  value: Dayjs | null; // Use Dayjs directly if you are working with dayjs objects
  onChange: (newValue: Dayjs | null) => void; // Ensure onChange accepts a Dayjs object or null
}
