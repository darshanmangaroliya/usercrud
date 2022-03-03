import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  const edithandler = (id) => {
      props.edithandler(id)
  }
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        edithandler= {edithandler}
        key={contact.id}
      />
    );
  });
  return (
    <>
      <div className="ui fixed menu">
        <div className="ui container center">
          <h2>{props.title}</h2>
        </div>
      </div>
      <div className="ui celled list">
      
        {renderContactList}</div>;
    </>
  );
};

export default ContactList;
