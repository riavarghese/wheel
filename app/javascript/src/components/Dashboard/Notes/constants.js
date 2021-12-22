import React from "react";

import { MenuBar } from "neetoui/v2/layouts";
import * as Yup from "yup";

export const SAMPLE_NOTES = [
  {
    title: "How to claim warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    label: "Getting Started",
    time: "Wednesday, 10:30 AM",
    created: "Created 2 hours ago",
    imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
  },
  {
    title: "How to claim warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    label: "Getting Started",
    time: "Wednesday, 10:30 AM",
    created: "Created 2 hours ago",
    imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
  },
  {
    title: "How to claim warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    label: "Getting Started",
    time: "Wednesday, 10:30 AM",
    created: "Created 2 hours ago",
    imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
  },
  {
    title: "How to claim warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    label: "Getting Started",
    time: "Wednesday, 10:30 AM",
    created: "Created 2 hours ago",
    imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
  },
];

export const FORM_CONTACTS_DROPDOWN = [
  {
    label: "Oliver",
    value: "oliver",
  },
  {
    label: "Sam",
    value: "sam",
  },
  {
    label: "Jane",
    value: "jane",
  },
];

export const FORM_TAGS_DROPDOWN = [
  {
    label: "Getting Started",
    value: "gettingStarted",
  },
  {
    label: "Onboarding",
    value: "onboarding",
  },
  {
    label: "User Flow",
    value: "userFlow",
  },
  {
    label: "UX",
    value: "ux",
  },
  {
    label: "Bugs",
    value: "bugs",
  },
  {
    label: "V2",
    value: "v2",
  },
];

export const NOTE_INITIAL_VALUES = {
  title: "",
  description: "",
  assignedContact: "",
  tags: "",
};

export const NOTE_VALIDATION_SCHEMA = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  assignedContact: Yup.object().required("Assigned contact is required"),
  tags: Yup.object().required("Tag is required"),
});

export const NOTES_MENUBAR_COMPONENTS = {
  allBlock: (
    <>
      <MenuBar.Block label="All" count={13} active />
      <MenuBar.Block label="Archived" count={2} />
      <MenuBar.Block label="Completed" count={7} />
      <MenuBar.Block label="Phase 2" count={4} />
    </>
  ),
  segmentsBlock: (
    <>
      <MenuBar.Block label="Europe" count={80} />
      <MenuBar.Block label="Middle-East" count={60} />
      <MenuBar.Block label="Asia" count={60} />
    </>
  ),
  tagsBlock: (
    <>
      <MenuBar.Block label="Sales" count={80} />
      <MenuBar.Block label="Finance" count={60} />
      <MenuBar.Block label="User Experience" count={60} />
    </>
  ),
};
