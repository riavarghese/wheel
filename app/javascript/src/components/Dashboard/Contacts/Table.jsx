import React, { useState, useContext } from "react";

import { MenuHorizontal } from "@bigbinary/neeto-icons";
import { Dropdown, Table } from "@bigbinary/neetoui/v2";

import { DashboardContext } from "contexts/dashboard";

import { CONTACTS, COLUMNS } from "./constants";

const ContactsTable = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const { setSelectedContact, setShowDeleteModal } =
    useContext(DashboardContext);

  const handleDelete = selectedContact => {
    setSelectedContact(selectedContact);
    setShowDeleteModal(true);
  };

  const optionsDropdown = selectedContact => {
    return (
      <Dropdown icon={MenuHorizontal} buttonStyle="text">
        <li>Edit</li>
        <li onClick={() => handleDelete(selectedContact)}>Delete</li>
      </Dropdown>
    );
  };

  const rowData = CONTACTS.map((contact, index) => ({
    ...contact,
    options: optionsDropdown(index),
  }));

  return (
    <Table
      columnData={COLUMNS}
      currentPageNumber={currentPageNumber}
      defaultPageSize={10}
      handlePageChange={page => setCurrentPageNumber(page)}
      rowData={rowData}
    />
  );
};

export default ContactsTable;
