import React, { useState, useContext } from "react";

import { MenuHorizontal } from "neetoicons";
import { Dropdown, Table } from "neetoui/v2";

import { DashboardContext } from "contexts/dashboard";

import { CONTACTS, COLUMNS } from "./constants";

const ContactsTable = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const { setSelectedContact, setIsDeleteAlertOpen } =
    useContext(DashboardContext);

  const handleDelete = selectedContact => {
    setSelectedContact(selectedContact);
    setIsDeleteAlertOpen(true);
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
    <div style={{ width: "99%" }}>
      <Table
        columnData={COLUMNS}
        currentPageNumber={currentPageNumber}
        defaultPageSize={10}
        handlePageChange={page => setCurrentPageNumber(page)}
        rowData={rowData}
      />
    </div>
  );
};

export default ContactsTable;
