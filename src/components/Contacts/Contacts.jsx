import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { Contact, Ul } from './Contacts.styled';

const ContactsList = () => {
  const dispatch = useDispatch();
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
      return <Contact key={contact.id}>{contact.name}: {contact.number}
        <button onClick={() => dispatch(removeContact(contact.id))}>Delete</button>
      </Contact>
    })}
  </Ul>
  )
};

export default ContactsList;
