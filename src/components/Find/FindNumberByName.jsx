import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contactsSlice';

export const FindNumberByName = () => {
  const dispatch = useDispatch();

  return (
    <label>
      Find number by name
      <input type="text" onChange={(e) => dispatch(filterContact(e.target.value))} />
    </label>
  );
};