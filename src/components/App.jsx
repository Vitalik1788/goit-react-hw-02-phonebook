import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { Container, Title, ContactListTitle } from "./App/App.styled";
import Form from "./Form/Form";
import ContactsList from "./Contact__List/Contact__List";


class App extends Component {
  state = {
    contacts: [],
  }

  addContact = (name) => {
    console.log(name);

    const contact = {
      id: nanoid(),
      name,
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }))
  }  

  render() { 
    const { contacts } = this.state;
    return (
    
      <Container>

        <Title>My Phonebook</Title>

        <Form onFormSubmit={this.addContact} />

        <ContactListTitle> My contacts list</ContactListTitle>

        <ContactsList contacts={contacts}/>

      
      
      </Container>)
    
  }
};

export default App;
