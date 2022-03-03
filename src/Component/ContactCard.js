import React from "react";

const ContactCard = (props) => {
  const { id, firstname, lastname , mobileno , city } = props.contact;
  return (
     <div className="item">
       <div className="content">
         <span className="header">{firstname}</span>
      <span className="header">{lastname}</span>
        <span className="header">{mobileno}</span>
        <span className="header">{city}</span>
      </div>
     
     <div className="deleteicon">
     <i className="edit icon"
    style={{ color: "green", marginTop: "7px" }}
    onClick={() => props.edithandler(id)}

     ></i>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
        ></i>
        </div>
    </div>
  );
};

export default ContactCard;