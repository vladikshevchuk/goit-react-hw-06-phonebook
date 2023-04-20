import React from 'react';
import { useSelector } from 'react-redux';
import { Ul } from './Contacts.styled';
import PersonContact from './PersonContact';

const ContactsList = () => {
  const state = useSelector(state => state.contacts);

  const getVisibleContacts = () => {
    const normalizedFilter = state.filter.toLowerCase();

    return state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Ul>
    {getVisibleContacts().map(contact => {
      return <PersonContact key={contact.id} contact={ contact } />
    })}
  </Ul>
  )
};

export default ContactsList;
