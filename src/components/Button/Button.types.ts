export interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  hover?: boolean;
  pressed?: boolean;
  backgroundColor:string;
}
