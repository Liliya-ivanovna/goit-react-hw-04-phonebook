import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Div } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
  if(parsedContacts){
    this.setState({ contacts: parsedContacts });
  }};

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  createUser = contact => {
    const { contacts } = this.state;
    const { name } = contact;
    if (contacts.find(contact => name === contact.name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState(prevState => {
      return { contacts: [contact, ...prevState.contacts] };
    });
  };

  addFilter = e => this.setState({ filter: e.target.value });

  onFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prev => {
      return { contacts: prev.contacts.filter(contact => contact.id !== id) };
    });
  };
  render() {
    const { contacts, filter } = this.state;

    return (
      <Div>
        <h1>Phonebook</h1>
        <ContactForm createUser={this.createUser} />

        <h2>Contacts</h2>
        <Filter filter={filter} addFilter={this.addFilter} />
        <ContactList
          contacts={this.onFilter(contacts)}
          deleteContact={this.deleteContact}
        />
      </Div>
    );
  }
}
