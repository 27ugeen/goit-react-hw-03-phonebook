import React, { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import styles from './PhoneBook.module.css';

const { form, inputLabel, input, formButton } = styles;

export default class PhoneBook extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;

    if (!isNaN(+name)) {
      alert('Enter valid Name');
      return;
    }

    if (isNaN(+number)) {
      alert('Enter valid Number');
      return;
    }

    this.props.onAddContact(name, number);

    this.setState({ name: '', number: '' });
  };

  idName = shortid.generate();
  idNumber = shortid.generate();

  render() {
    const { name, number } = this.state;

    return (
      <form className={form} onSubmit={this.handleSubmit}>
        <label className={inputLabel} htmlFor={this.idName}>
          Name
        </label>
        <input
          className={input}
          type="text"
          placeholder="Enter user name*"
          value={name}
          onChange={this.handleInputChange}
          name="name"
          id={this.idName}
          required
        />
        <label className={inputLabel} htmlFor={this.idNumber}>
          Number
        </label>
        <input
          className={input}
          type="text"
          placeholder="Enter user phone number*"
          value={number}
          onChange={this.handleInputChange}
          name="number"
          id={this.idNumber}
          required
        />
        <button type="submit" className={formButton}>
          Add contact
        </button>
      </form>
    );
  }
}
