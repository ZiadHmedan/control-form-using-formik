import { Field, FieldProps, Form, Formik } from "formik";
import * as Yup from "yup";
import ControlField from "./ControlField";
import { GridOneRow, Typography } from "../styles/utils";
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
  queryType: "general",
  message: "",
  consent: false,
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  queryType: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
  consent: Yup.boolean().oneOf([true], "Consent is required"),
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
          name="queryType"
          type="radio"
          label="Query Type"
          options={[
            { label: "General Enquiry", value: "general" },
            { label: "Support Request", value: "support" },
          ]}
        />

        <ControlField label="Message" name="messsage" type="text" />
        <div className="">
          <Field name="consent">
            {(props: FieldProps<string>) => {
              const { field, meta } = props;
              return (
                <div className="flex">
                  <StyledCheckBox type="checkbox" {...field} />
                  {meta.touched && meta.error ? "error" : null}
                  <Typography as="label" htmlFor="consent">
                    I consent to being contacted by the team *
                  </Typography>
                </div>
              );
            }}
          </Field>
        </div>
        <Button type="submit">
          <Typography $bold $size="medium" $white>Submit</Typography>
        </Button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
