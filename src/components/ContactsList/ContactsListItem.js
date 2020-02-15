import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';

const { contactsListItem, contactButton } = styles;

const ContactsListItem = ({ name, number, onDeleteContact }) => (
  <li className={contactsListItem}>
    <p>
      {name}: {number}
    </p>
    <button type="submit" onClick={onDeleteContact} className={contactButton}>
      Delete
    </button>
  </li>
);

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsListItem;
