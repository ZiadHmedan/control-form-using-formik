import { ErrorMessage, Field, FieldProps } from "formik";
import { Typography } from "../Ui/Typography";
import theme from "../theme";
import TextError from "./TextError";
import { StyledCheckBox } from "../Ui/StyledCheckBox";

interface InputProps {
  label: string;
  name: string;
  type: string;
}
const CheckBox: React.FC<InputProps> = ({ label, name, type }) => {
  return (
    <div>
      <Field name={name}>
        {({ field }: FieldProps<string>) => (
          <StyledCheckBox>
            <input type={type} {...field} />
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
