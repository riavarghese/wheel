import React, { useState } from "react";

import { Table } from "@bigbinary/neetoui/v2";

import { RECORDS_LENGTH, CONTACTS, COLUMNS } from "./constants";

const ContactsTable = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const repeatRecords = () => {
    return Array(RECORDS_LENGTH)
      .fill()
      .map((_, index) => CONTACTS[index % CONTACTS.length]);
  };

  return (
    <Table
      columnData={COLUMNS}
      currentPageNumber={currentPageNumber}
      defaultPageSize={10}
      handlePageChange={page => setCurrentPageNumber(page)}
      rowData={repeatRecords()}
    />
  );
};

export default ContactsTable;
