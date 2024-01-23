import { TextField } from "@mui/material";
import { useController } from "react-hook-form";

const MInputText = ({ name, rules, control, ...props }) => {
  const { field: { value = '', onChange } } = useController({ name, rules, control });

  return (
    <TextField 
      value={value}
      onChange={onChange}
      {...props}
    />
  )
};

export default MInputText;
