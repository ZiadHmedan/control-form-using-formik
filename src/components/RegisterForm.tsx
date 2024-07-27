import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import FiledControl from "./FiledControl";
import { GridOneRow } from "../ui/GridOneRow";
import { Button } from "../ui/Button";
import { Typography } from "../ui/Typography";
import { useCallback, useMemo } from "react";
interface RegisterFormProps {
  handleModal: (callback: (prev: boolean) => boolean) => void;
}
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  queryType: string;
  message: string;
  consent: boolean;
}

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  queryType: "",
  message: "",
  consent: false,
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("This field is required"),
  lastName: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("This field is required"),
  queryType: Yup.string().required("Please select a query type"),

  message: Yup.string().required("This field is required"),
  consent: Yup.boolean().oneOf(
    [true],
    "To submit this form, please consent to being contacted"
  ),
});
const options: { key: string; val: string }[] = [
  { key: "General Enquiry", val: "general" },
  { key: "Support Request", val: "support" },
];
const RegisterForm: React.FC<RegisterFormProps> = ({ handleModal }) => {
  const onSubmit = useCallback(
    (values: FormValues, formikHelpers: FormikHelpers<FormValues>) => {
      console.log(values);
      handleModal(prev => !prev);
      formikHelpers.setSubmitting(false);
    },
    [handleModal]
  );
  const memoizedInitialValues = useMemo(() => initialValues, []);
  const memoizedValidationSchema = useMemo(() => validationSchema, []);
  const memoizedOptions = useMemo(() => options, []);

  return (
    <Formik
      initialValues={memoizedInitialValues}
      validationSchema={memoizedValidationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, isValid }) => (
        <Form className="form">
          <GridOneRow $styleFor="input">
            <FiledControl
              control="input"
              type="text"
              name="firstName"
              label="First Name"
            />
            <FiledControl
              control="input"
              type="text"
              name="lastName"
              label="Last Name"
            />
          </GridOneRow>
          <FiledControl
            control="input"
            type="email"
            name="email"
            label="Email Address"
          />
          <FiledControl
            control="radio"
            type="radio"
            name="queryType"
            label="Query Type"
            options={memoizedOptions}
          />

          <FiledControl
            control="input"
            type="textarea"
            name="message"
            label="Message"
          />
          <FiledControl
            control="checkbox"
            type="checkbox"
            name="consent"
            label="I consent to being contacted by the team"
          />
          <Typography $bold $size="medium" $white>
            <Button type="submit" disabled={!isValid || isSubmitting}>
              Submit
            </Button>
          </Typography>
        </Form>
      )}
    </Formik>
  );
};
export default RegisterForm;
