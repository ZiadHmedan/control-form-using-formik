import { Field, FieldProps } from "formik";
import { Typography } from "../styles/utils";
interface MyComponentProps {
  label: string;
  name: string;
  type?: string;
  options?: { label: string; value: string }[];
}
const ControlField: React.FC<MyComponentProps> = ({
  name,
  label,
  type,
  options,
}) => {
  if (!type) type = "text";
  return (
    <div>
      <Typography as="label">{label}</Typography>
      <Field name={name}>
        {(props: FieldProps<string>) => {
          const { field, meta } = props;
          return (
            <div>
              {type === "radio" && options ? (
                options.map(option => (
                  <label key={option.value}>
                    <input
                      type="radio"
                      id={`${name}-${option.value}`}
                      {...field}
                      value={option.value}
                      checked={field.value === option.value}
                    />
                    {option.label}
                  </label>
                ))
              ) : (
                <input type={type} id={name} {...field} />
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