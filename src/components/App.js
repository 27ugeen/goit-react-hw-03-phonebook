import React, { Component } from 'react';
import Phonebook from './PhoneBook';
import Contactlist from './ContactList';
import ContactFilter from './ContactFilter';
import Section from './Section';
import Notification from './Notification';
import { uuid } from 'uuidv4';
import PropTypes from 'prop-types';

export default class App extends Component {
  static defaultProps = {
    contacts: [],
    filter: '',
  };

  static propTypes = {
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
  };

  state = {
    contacts: this.props.contacts,
    filter: this.props.filter,
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (contactName, number) => {
    this.setState(prevState => {
      const { contacts } = prevState;

      if (contacts.some(({ name }) => name === contactName)) {
        alert(`${contactName} is already in contacts`);
        return;
      }
      const newContact = {
        id: uuid(),
        name: contactName,
        number,
      };
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      const { contacts } = prevState;

      return {
        contacts: contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <Section title="Phonebook">
          <Phonebook onAddContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          {contacts.length > 1 && (
            <ContactFilter value={filter} onChangeFilter={this.changeFilter} />
          )}
          {contacts.length < 1 ? (
            <Notification message="There is no contact yet..." />
          ) : (
            <Contactlist
              contacts={filteredContacts}
              onDeleteContact={this.deleteContact}
            />
          )}
        </Section>
      </>
    );
  }
}
