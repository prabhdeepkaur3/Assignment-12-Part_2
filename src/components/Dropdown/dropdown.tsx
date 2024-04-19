import React from 'react';

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: Option[];
  onChange: (value: string) => void;
  disabled?: boolean;
  backgroundColor?: string; 
}

const Dropdown: React.FC<DropdownProps> = ({ options, onChange, disabled = false, backgroundColor }) => {
  const dropdownStyle: React.CSSProperties = {
    backgroundColor: backgroundColor || 'transparent', 
  };

  return (
    <select onChange={(e) => onChange(e.target.value)} disabled={disabled} style={dropdownStyle}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
