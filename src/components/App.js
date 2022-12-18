import React from 'react';
import { nanoid } from 'nanoid'
import { ContactsList } from "./ContactList/ContactsList"
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';


export class App extends React.Component {

state = {
  contacts: [],
  filter: '',
}
 
  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  
  componentDidMount() {
 const contactsInStorage = localStorage.getItem('contacts')
 const parsedContacts = JSON.parse(contactsInStorage)
    if (parsedContacts) {
     this.setState({contacts: parsedContacts}) 
}
}


  addContact = (name, number) => {
    const existPerson = this.state.contacts.find(person =>
      person.name.toLowerCase() === name.toLowerCase())
    if (existPerson) {  
    return alert(`${existPerson.name } is already in contact`)
  }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],  
}),  )
  }

  reset = () => {
    this.setState({name:"", number:""}) 
  }
  
  onFindContact = (event) => {
    const filter = event.target.value;
    this.setState({ filter: filter.toLowerCase() });
  };
   
  
  deleteContact = ContactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact =>
        contact.id !== ContactId), }))
}

  render()
 
{
  const { contacts, filter } = this.state
  const { reset, addContact, deleteContact, onFindContact } = this
    
  const resultFind = contacts.filter(person =>
      person.name.toLowerCase().includes(filter)
    );
  return (
    <>
     <h1> Phonebook</h1>
      <ContactForm onSubmit={ addContact} onReset={reset} />
      <h2> Contacts </h2>
      <Filter search={filter} onFindContact={onFindContact} />  
      <ContactsList items = {resultFind} onDelete={deleteContact}   />
    </>
    );
}
}
 
