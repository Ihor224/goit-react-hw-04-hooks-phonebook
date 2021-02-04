import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactList from './Components/ContactList';
import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter';

export default function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactId => {
    setFilter(contacts.filter(contact => contact.id !== contactId));
  };

  const addContact = ({ name, number }) => {
    const phone = {
      id: uuidv4(),
      name,
      number,
    };

    contacts.find(
      contact => contact.name.toLowerCase() === phone.name.toLowerCase(),
    )
      ? alert(`${name} is already in contacts`)
      : setContacts([phone, ...contacts]);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedPhone = filter.toLowerCase();
    return contacts.filter(phone =>
      phone.name.toLowerCase().includes(normalizedPhone),
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        getContacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}
