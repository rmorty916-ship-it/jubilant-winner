
import { JSX } from "react";

export function TextInput({
  placeholder,
  value,
  onChange,
}: {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}): JSX.Element {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '200px',
      }}
    />
  );
}   