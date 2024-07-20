import { Field, FieldProps } from "formik";
import { GridOneRow, StyledErrorMsg, Typography } from "../styles/utils";
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
    <div className="flex-col">
      <Typography as="label"  htmlFor={name} className="">
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
                        <input type={type} id={value} {...field}  />
                        <Typography as="label" $size="medium" htmlFor={value}>{label}</Typography>

                      </StyledRadio>
                      
                    );
                  })}
                </GridOneRow>
              ) : (
                <StyledInput $high={name === 'message'} type={type} id={name} {...field} />
              )}
              {meta.touched && meta.error ? <Typography><StyledErrorMsg>{meta.error}</StyledErrorMsg></Typography> : null}
            </div>
          );
        }}
      </Field>
    </div>
  );
};
export default ControlField;
// import { Field, FieldProps, FormikValues } from "formik";
// import { GridOneRow, StyledErrorMsg, Typography } from "../styles/utils";
// import { StyledInput } from "../ui/StyledInput";
// import { StyledRadio } from "../ui/StyledRadio";

// interface MyComponentProps {
//   label: string;
//   name: string;
//   type?: string;
//   options?: { label: string; value: string }[];
// }

// const ControlField: React.FC<MyComponentProps> = ({
//   name,
//   label,
//   type = "text",
//   options,
// }) => {
//   return (
//     <div className="flex-col">
//       <Typography as="label" htmlFor={name} className="">
//         {label}
//       </Typography>
//       <Field name={name}>
//         {(props: FieldProps<string, FormikValues>) => {
//           const { field, meta, form } = props;
//           return (
//             <div>
//               {type === "radio" ? (
//                 <GridOneRow>
//                   {options?.map(({ label, value }) => (
//                     <StyledRadio key={value}>
//                       <input
//                         type={type}
//                         id={value}
//                         {...field}
//                         // value={value}
//                         // checked={field.value === value}
//                         // onChange={() => form.setFieldValue(name, value)}
//                       />
//                       <Typography as="label" $size="medium" htmlFor={value}>
//                         {label}
//                       </Typography>
//                     </StyledRadio>
//                   ))}
//                 </GridOneRow>
//               ) : (
//                 <StyledInput
//                   $high={name === "message"}
//                   type={type}
//                   id={name}
//                   {...field}
//                 />
//               )}
//               {meta.touched && meta.error ? (
//                 <Typography>
//                   <StyledErrorMsg>{meta.error}</StyledErrorMsg>
//                 </Typography>
//               ) : null}
//             </div>
//           );
//         }}
//       </Field>
//     </div>
//   );
// };

// export default ControlField;
