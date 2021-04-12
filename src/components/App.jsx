import React from "react";
import Contacts from "../contacts"
import Card from "./Card"

function createCard(contact){

  return <Card
    key = {contact.id}
    dataKey= {contact.id}
    name = {contact.name}
    img = {contact.imgURL}
    tele = {contact.phone}
    email = {contact.email}
  />

}



function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      
      {Contacts.map(createCard)}

    </div>
  );
}

export default App;
