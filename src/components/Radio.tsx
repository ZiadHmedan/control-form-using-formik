import { ErrorMessage, Field, FieldProps } from "formik";
import { StyledRadio } from "../ui/StyledRadio";
import { Typography } from "../ui/Typography";
import TextError from "./TextError";
import { GridOneRow } from "../ui/GridOneRow";
import theme from "../theme";

interface MyProps {
  label: string;
  name: string;
  type: string;
  options?: { key: string; val: string }[];
}

const Radio = ({ name, label, options, type }: MyProps) => {
  return (
    <div>
      <Typography as="label">
        {label} <span style={{ color: theme.colors.darkGreen }}>*</span>
      </Typography>
      <GridOneRow $styleFor={type}>
        <Field name={name} id={name}>
          {({ field }: FieldProps<string>) => (
            <>
              {options?.map(({ key, val }) => (
                <StyledRadio key={val} $active={!!field.checked}>
                  <input
                    type={type}
                    id={val}
                    {...field}
                    value={val}
                    checked={field.value === val}
                  />
                  <Typography as="label" htmlFor={val}>
                    {key}
                  </Typography>
                </StyledRadio>
              ))}
            </>
          )}
        </Field>
      </GridOneRow>
      <ErrorMessage name={name} component={TextError as React.ComponentType} />
    </div>
  );
};

export default Radio;
