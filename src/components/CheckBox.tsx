import { ErrorMessage, Field, FieldProps } from "formik";
import { Typography } from "../ui/Typography";
import theme from "../theme";
import TextError from "./TextError";
import { StyledCheckBox } from "../ui/StyledCheckBox";

interface InputProps {
  label: string;
  name: string;
  type: string;
}
const CheckBox: React.FC<InputProps> = ({ label, name, type }) => {
  return (
    <div>
      <Field id={name} name={name}>
        {({ field }: FieldProps<string>) => (
          <StyledCheckBox>
            <input id={name}  type={type} {...field} />
            <Typography as="label" htmlFor={name}>
              {label} <span style={{ color: theme.colors.darkGreen }}>*</span>
            </Typography>
          </StyledCheckBox>
        )}
      </Field>
      <ErrorMessage name={name} component={TextError as React.ComponentType} />
    </div>
  );
};

export default CheckBox;
