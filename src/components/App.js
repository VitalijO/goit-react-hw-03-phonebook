import React from 'react';
import { nanoid } from 'nanoid'
import { ContactsList } from "./ContactList/ContactsList"
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';


export class App extends React.Component {
static defaultProps = {
   contacts: [],
  filter: ''
}
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
}
 
  
  addContact = (name, number) => {
    const existPerson = this.state.contacts.find(person => person.name===name)
    if (existPerson) {  
    return alert(`${existPerson.name } is already in contact`)
  }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],  
}),  )
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
      <ContactForm onSubmit={ addContact} reset={reset} />
      <h2> Contacts </h2>
      <Filter search={filter} onFindContact={onFindContact} />  
      <ContactsList items = {resultFind} onDelete={deleteContact} />
    </>
    );
}
}
 
