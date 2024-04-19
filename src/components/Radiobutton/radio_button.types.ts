export interface RadioButtonProps {
    label: string;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    backgroundColor: string;
  }
  