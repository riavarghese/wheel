import React, { useState, useContext } from "react";

import { Formik, Form } from "formik";
import { Toastr, Button, Pane } from "neetoui/v2";
import { Input, Select } from "neetoui/v2/formik";

import {
  CONTACT_INITIAL_VALUES,
  CONTACT_VALIDATION_SCHEMA,
  MONTHS,
  CONTACTS,
  FORM_ROLE_DROPDOWN,
} from "components/Dashboard/Contacts/constants";
import { formatNameAndRole } from "components/Dashboard/Contacts/utils";
import { DashboardContext } from "contexts/dashboard";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { setIsNewContactPaneOpen } = useContext(DashboardContext);

  const handleSubmit = values => {
    const date = new Date();

    const createdAt = `${
      MONTHS[date.getMonth()]
    }, ${date.getDate()}, ${date.getFullYear()}`;

    const newContact = {
      ...values,
      name_role: formatNameAndRole({
        name: `${values.firstName} ${values.lastName}`,
        role: values.role.label,
      }),
      created_at: createdAt,
    };

    CONTACTS.unshift(newContact);
    setIsNewContactPaneOpen(false);
    Toastr.success("Contact created successfully.");
  };

  return (
    <Formik
      initialValues={CONTACT_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACT_VALIDATION_SCHEMA}
    >
      {({ isSubmitting, handleSubmit }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <div className="flex w-full gap-x-4">
              <Input
                label="First Name*"
                name="firstName"
                className="flex-grow-0 w-full"
                placeholder="Enter first name"
              />
              <Input
                label="Last Name*"
                name="lastName"
                className="flex-grow-0 w-full"
                placeholder="Enter last name"
              />
            </div>
            <Input
              label="Email address*"
              name="email"
              className="flex-grow-0 w-full"
              placeholder="Enter your email address"
            />
            <Select
              label="Role*"
              name="role"
              className="flex-grow-0 w-full"
              options={FORM_ROLE_DROPDOWN}
              placeholder="Select Role"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              type="submit"
              label="Save Changes"
              size="large"
              style="primary"
              className="mr-3"
              disabled={isSubmitting}
              loading={isSubmitting}
              onClick={e => {
                e.preventDefault();
                setSubmitted(true);
                handleSubmit();
              }}
            />
            <Button
              onClick={() => setIsNewContactPaneOpen(false)}
              label="Cancel"
              size="large"
              style="text"
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
