import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const { contactList, contactListItem, contactButton } = styles;

const Contactlist = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ul className={contactList}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={contactListItem}>
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
      </ul>
    </>
  );
};

Contactlist.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contactlist;
