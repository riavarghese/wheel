import * as Yup from "yup";

export const SIGNUP_INITIAL_VALUES = {
  email: "",
  password: "",
};

export const SIGNUP_VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
});
