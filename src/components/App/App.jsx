import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Filter } from 'components/Filter/Filter';
import { NameInput } from 'components/NameInput/NameInput';
import { Contacts } from 'components/Contacts/Contacts';

import { Wrapper } from './app.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '4591256' },
      { id: 'id-2', name: 'Hermione Kline', number: '4438912' },
      { id: 'id-3', name: 'Eden Clements', number: '6451779' },
      { id: 'id-4', name: 'Annie Copeland', number: '2279126' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  addContact = cont => {
    this.setState(prevState => {
      cont.id = nanoid();
      return {
        contacts: [cont, ...prevState.contacts],
      };
    });
  };
  deleteContact = cont => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(e => e.id !== cont),
      };
    });
  };
  getFilter = value => {
    let name = value.currentTarget.value.toLowerCase();
    this.setState({
      filter: name,
    });
  };
  render() {
    return (
      <Wrapper
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   flexDirection: 'column',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
      >
        <h1>Phonebook</h1>
        <NameInput addstate={this.addContact} state={this.state} />
        <Filter filter={this.getFilter} />
        <Contacts state={this.state} deleteContact={this.deleteContact} />
      </Wrapper>
    );
  }
}
