import { Field, FieldProps, Form, Formik } from "formik";
import * as Yup from "yup";
import ControlField from "./ControlField";
import { GridOneRow, StyledErrorMsg, Typography } from "../styles/utils";
import { Button } from "../ui/Button";
import { StyledCheckBox } from "../ui/StyledCheckBox";

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
  queryType: "general" || "support",
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

const onSubmit = (values: FormValues) => console.log(values);

const RegisterForm: React.FC = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="form">
        <GridOneRow>
          <ControlField label="First Name" name="firstName" />
          <ControlField label="Last Name" name="lastName" />
        </GridOneRow>
        <ControlField label="Email Address" name="email" type="email" />

        <ControlField
          type="radio"
          label="Query Type"
          name="queryType"
          options={[
            { key: "General Enquiry", val: "general" },
            { key: "Support Request", val: "support" },
          ]}
        />

        <ControlField label="Message" name="message" type="text" />
        <div className="">
          <Field name="consent">
            {(props: FieldProps<string>) => {
              const { field, meta } = props;
              return (
                <div>
                  <div className="flex">
                    <StyledCheckBox type="checkbox" {...field} />
                    <Typography as="label" htmlFor="consent">
                      I consent to being contacted by the team *
                    </Typography>
                  </div>

                  {meta.touched && meta.error ? (
                    <div className="">
                      <Typography>
                        <StyledErrorMsg>{meta.error}</StyledErrorMsg>
                      </Typography>
                    </div>
                  ) : null}
                </div>
              );
            }}
          </Field>
        </div>
        <Button type="submit">
          <Typography $bold $size="medium" $white>
            Submit
          </Typography>
        </Button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
