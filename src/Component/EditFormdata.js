import { useState } from "react";

function Editdata({updateContactHandler, editdata}) {
  const [firstname, setFirstname] = useState(editdata.firstname);
  const [lastname, setLastname] = useState(editdata.lastname);
  const [mobileno, setMobileno] = useState(editdata.mobileno);
  const [city, setCity] = useState(editdata.city);
  const updatedata = (e) => {
    e.preventDefault();
    if(!firstname || !lastname ||!mobileno || !city){
        alert("ALl the fields are mandatory!");
      return;
    }
    const data = {
        firstname,
        lastname,
        mobileno,
        city,
        id:editdata.id
    }
    updateContactHandler(data)
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={updatedata}>
        <div className="field">
          <label>Name</label>
          <input 
            type="text"
            name="firstname"
            placeholder="firstname"
            value={ firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="field">
          <label>lastname</label>
          <input
            type="text"
            name="lastname"
            placeholder="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Mobile no</label>
          <input
            type="text"
            name="mobileno"
            placeholder="mobileno"
            value={mobileno}
            onChange={(e) => setMobileno(e.target.value)}
          />
        </div>
        <div className="field">
          <label>City</label>
          <input
            type="text"
            name="city"
            placeholder="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <button className="ui button blue">update</button>
      </form>
    </div>
  );
}

export default Editdata;
