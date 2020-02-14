import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';

const { contactsListItem, contactButton } = styles;

const ContactsListItem = ({ contacts, onDeleteContact }) => (
  <>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={contactsListItem}>
        <p>
          {name}: {number}
        </p>
        <button
          type="submit"
          onClick={() => onDeleteContact(id)}
          className={contactButton}
        >
          Delete
        </button>
      </li>
    ))}
  </>
);

ContactsListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsListItem;
