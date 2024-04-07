interface FieldProps {
  label?: string;
  onChange: (value: string) => void;
  value?: string | number;
}

export interface InputFieldProps extends FieldProps {
  placeholder?: string;
  type?: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends FieldProps {
  options: SelectOption[];
}
