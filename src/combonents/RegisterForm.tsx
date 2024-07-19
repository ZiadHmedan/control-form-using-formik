import {  Form, Formik } from "formik";
import * as Yup from "yup";
import ControlField from "./ControlField";

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
      <Form>
        {/* <Input/> */}
        <ControlField label= "First Name" name="firstName"/>
        <ControlField label= "Last Name" name="LastName"/>
        <ControlField label= "Email Address" name="LastName" type="email" />
        <ControlField
          label="Query Type"
          name="queryType"
          type="radio"
          options={[
            { label: "General Enquiry", value: "general" },
            { label: "Support Request", value: "support" },
          ]}
        />  
      </Form>
    </Formik>
  );
};

export default RegisterForm;
