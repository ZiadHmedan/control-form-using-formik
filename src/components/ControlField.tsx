import { Field, FieldProps } from "formik";
import { GridOneRow, Typography } from "../styles/utils";
import { StyledInput } from "../ui/StyledInput";
import { StyledRadio } from "../ui/StyledRadio";
// import RadioInput from "./RadioInput";
interface MyComponentProps {
  label: string;
  name: string;
  type?: string;
  options?: { label: string; value: string }[];
}
const ControlField: React.FC<MyComponentProps> = ({
  name,
  label,
  type = "text",
  options,
}) => {
  return (
    <div>
      <Typography as="label"  htmlFor={name}>
        {label}
      </Typography>
      <Field name={name}>
        {(props: FieldProps<string>) => {
          const { field, meta } = props;
          return (
            <div>
              {type === "radio" ? (
                <GridOneRow>
                  {options?.map(({ label, value }) => {
                    return (
                      <StyledRadio key={value}>
                        <input type={type} id={value} {...field} />
                        <Typography as="label" $size="medium" htmlFor={value}>{label}</Typography>
                      </StyledRadio>
                    );
                  })}
                </GridOneRow>
              ) : (
                <StyledInput type={type} id={name} {...field} />
              )}
              {meta.touched && meta.error ? "error" : null}
            </div>
          );
        }}
      </Field>
    </div>
  );
};
export default ControlField;
