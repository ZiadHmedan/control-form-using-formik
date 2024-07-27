import { ErrorMessage, Field, FieldProps } from "formik";
import TextError from "./TextError";
import { StyledInput } from "../ui/StyledInput";
import { Typography } from "../ui/Typography";
import theme from "../theme";

interface InputProps {
  label: string;
  name: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ label, name, type }) => {
  return (
    <div>
      <Typography as="label" htmlFor={name}>
        {label} <span style={{ color: theme.colors.darkGreen }}>*</span>
      </Typography>
      <Field id={name} name={name}>
        {(props: FieldProps<string>) => {
          const { field, meta } = props;
          let err = false;
          if (meta.error && meta.touched) err = true;

          return (
            <StyledInput
              as={type === "textarea" ? "textarea" : "input"}
              id={name}
              {...(type !== "textarea" && { type })}
              {...field}
              $unValid={err}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError as React.ComponentType} />
    </div>
  );
};

export default Input;
