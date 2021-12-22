import React, { useState, useContext } from "react";

import { Formik, Form } from "formik";
import moment from "moment";
import { Toastr, Button, Pane } from "neetoui/v2";
import { Input, Textarea, Select } from "neetoui/v2/formik";

import {
  NOTE_INITIAL_VALUES,
  NOTE_VALIDATION_SCHEMA,
  FORM_TAGS_DROPDOWN,
  FORM_CONTACTS_DROPDOWN,
  SAMPLE_NOTES,
} from "components/Dashboard/Notes/constants";
import { DashboardContext } from "contexts/dashboard";

const NoteForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { setIsNewNotePaneOpen } = useContext(DashboardContext);

  const handleSubmit = values => {
    const day = new Date().toLocaleString("en-US", {
      weekday: "long",
    });

    const time = new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    const createdAt = moment().fromNow();

    SAMPLE_NOTES.unshift({
      ...values,
      label: values.tags.label,
      time: `${day}, ${time}`,
      created: `Created ${createdAt}`,
      imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
    });

    setIsNewNotePaneOpen(false);
    Toastr.success("Note created successfully.");
  };

  return (
    <Formik
      initialValues={NOTE_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={NOTE_VALIDATION_SCHEMA}
    >
      {({ isSubmitting, handleSubmit }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              label="Title*"
              name="title"
              className="flex-grow-0 w-full"
              placeholder="Enter note title"
            />
            <Textarea
              label="Description*"
              name="description"
              className="flex-grow-0 w-full"
              placeholder="Enter note description"
              rows={1}
            />
            <Select
              label="Assigned Contact*"
              name="assignedContact"
              className="flex-grow-0 w-full"
              options={FORM_CONTACTS_DROPDOWN}
              placeholder="Select Role"
            />
            <Select
              label="Tags*"
              name="tags"
              className="flex-grow-0 w-full"
              options={FORM_TAGS_DROPDOWN}
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
              onClick={() => setIsNewNotePaneOpen(false)}
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

export default NoteForm;
