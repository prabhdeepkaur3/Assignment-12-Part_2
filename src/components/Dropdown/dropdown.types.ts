export interface DropdownProps {
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  disabled?: boolean; 
  backgroundColor: string;
}
