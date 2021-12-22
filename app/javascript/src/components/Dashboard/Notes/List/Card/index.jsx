import React from "react";

import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Card = ({ note, index }) => {
  return (
    <div className="border border-gray-300 p-4 shadow-sm mb-4 rounded-sm">
      <div className="border-b pb-2">
        <Card.Header>{{ note, index }}</Card.Header>
        <Card.Body>{note.description}</Card.Body>
        <Card.Footer>{{ note }}</Card.Footer>
      </div>
    </div>
  );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
