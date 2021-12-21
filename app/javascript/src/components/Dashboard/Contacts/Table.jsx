import React, { useState } from "react";

import { Table } from "@bigbinary/neetoui/v2";

import { CONTACTS, COLUMNS } from "./constants";

const ContactsTable = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  return (
    <Table
      columnData={COLUMNS}
      currentPageNumber={currentPageNumber}
      defaultPageSize={10}
      handlePageChange={page => setCurrentPageNumber(page)}
      rowData={CONTACTS.map(contact => contact)}
    />
  );
};

export default ContactsTable;
