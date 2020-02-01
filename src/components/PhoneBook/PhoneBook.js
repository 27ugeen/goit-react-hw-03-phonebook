import React, { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import styles from './PhoneBook.module.css';

const { form, inputLabel, input, formButton } = styles;

export default class PhoneBook extends Component {
  static defaultProps = {
    name: '',
    number: '',
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: this.props.name,
    number: this.props.number,
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

    this.props.onAddContact(name, number);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    const idName = shortid.generate();
    const idNummber = shortid.generate();
    return (
      <>
        <form className={form} onSubmit={this.handleSubmit}>
          <label className={inputLabel} htmlFor={idName}>
            Name
          </label>
          <input
            className={input}
            type="text"
            placeholder="Enter user name*"
            value={name}
            onChange={this.handleInputChange}
            name="name"
            id={idName}
            required
          />
          <label className={inputLabel} htmlFor={idNummber}>
            Number
          </label>
          <input
            className={input}
            type="text"
            placeholder="Enter user phone number*"
            value={number}
            onChange={this.handleInputChange}
            name="number"
            id={idNummber}
            required
          />
          <button type="submit" className={formButton}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}
