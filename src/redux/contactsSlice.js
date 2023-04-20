import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      if (
        state.contacts.some(contact => contact.name === action.payload.name)
      ) {
        return alert(`${action.payload.name} is already in contacts`);
      } else {
        state.contacts.push(action.payload);
      }
    },
    removeContact: (state, action) => {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
        state.contacts.splice(index, 1);
    },
    filterContact: (state, action) => {
      state.filter = action.payload.toLowerCase();
    },
  },
});

export const { addContact, removeContact, filterContact } =
  contactsSlice.actions;
