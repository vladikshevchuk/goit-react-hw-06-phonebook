import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux'
import { filterContact } from 'redux/contactsSlice';

export const FindNumberByName = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.contacts.filter);
  console.log(state);

  return (
    <label>
      Find number by name
      <input type="text" onChange={(e) => dispatch(filterContact(e.target.value))} />
    </label>
  );
};

FindNumberByName.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}