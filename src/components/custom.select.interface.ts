export default interface CustomSelectInterface {
  title: string;
  multiple: boolean;
  value: string[];
  onChange: (value: string | string[]) => void;
}
