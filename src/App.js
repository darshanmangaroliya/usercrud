import "./App.css";
import React, { useEffect, useState } from "react";
import ContactForm from "./Component/Contactform";
import ContactList from "./Component/ContactCardlist";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, Route, Routes } from "react-router-dom";
import Editdata from "./Component/EditFormdata";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [dataedit, setDataedit] = useState({});
  const navigate = useNavigate();

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };
  const edithandler = (id) => {
    const editdata = contacts?.find((e)=>e.id === id);
    setDataedit(editdata);
    navigate("/edit");
  };

  const updateContactHandler = (editdata)=> {
  const  objIndex = contacts.findIndex((obj => obj.id == editdata.id));

  const newlist = [...contacts]
console.log(objIndex)
  newlist[objIndex] =  editdata
  localStorage.setItem("contacts", JSON.stringify(contacts));
   console.log(contacts)
   setContacts(newlist)
  console.log(contacts)
  navigate("/")
  }  
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem("contacts"));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  
  }, [contacts]);

const Sudoelement = ()=> {
  return(

    <>
  <ContactForm
  addContactHandler={addContactHandler}
  title="Add contact"
/>
<ContactList
        contacts={contacts}
        getContactId={removeContactHandler}
        edithandler={edithandler}
        />
  </>
        )

}

  return (
    <div className="ui container">
      <Routes>
        <Route
          path="/"
          element={
           <Sudoelement/>
          }
        ></Route>
        <Route
          path="/edit"
          element={
            <Editdata
               updateContactHandler={updateContactHandler}
              editdata={dataedit}
              title="Add contact"
            />
          }
        ></Route>
        {/* <ContactForm
        addContactHandler={addContactHandler}
        edithandler={edithandler}
        editdata={dataedit}
        title="Add contact"
        /> */}
      </Routes>
     
    </div>
  );
};

export default App;
