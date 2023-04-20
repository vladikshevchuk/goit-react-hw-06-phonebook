import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { Contact } from './Contacts.styled';

const PersonContact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <Contact>{contact.name}: {contact.number}
        <button onClick={() => dispatch(removeContact(contact.id))}>Delete</button>
      </Contact>
  )
}

PersonContact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })
}

export default PersonContact;
