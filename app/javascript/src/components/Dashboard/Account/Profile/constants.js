import * as Yup from "yup";

export const PROFILE_VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});
