import React from "react";
import Contacts from "../contacts"
import Avatar from "./Avatar"

function Card(props){
  return <div>
    <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
           <Avatar img ={props.img} />          
        </div>
        <div className="bottom">
          <p className="info" >{props.tele}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
  </div>
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      
      <Card
        name = {Contacts[0].name}
        img = {Contacts[0].imgURL}
        tele = {Contacts[0].phone}
        email = {Contacts[0].email}
      />
      <Card
        name = {Contacts[1].name}
        img = {Contacts[1].imgURL}
        tele = {Contacts[1].phone}
        email = {Contacts[1].email}
      />
      <Card
        name = {Contacts[2].name}
        img = {Contacts[2].imgURL}
        tele = {Contacts[2].phone}
        email = {Contacts[2].email}
      />

    </div>
  );
}

export default App;
