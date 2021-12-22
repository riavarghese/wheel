import * as Yup from "yup";

export const RESET_PASSWORD_INITIAL_VALUES = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  passwordConfirmation: "",
};

export const RESET_PASSWORD_VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
});
