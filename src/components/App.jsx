import React, { Component } from "react";
import shortid from "shortid";
import {Title1, Title2} from '../components/App.styled';
import Form from "./NameInput/NameInput";
import Filter from "./Filter/Filter";
import Contact from "./Contacts/Contacts";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  contactDelete = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  formSubmitHandler = (data) => {
    this.state.contacts.forEach((element) => {
      if (element.name.toLowerCase() === data.name.toLowerCase()) {
        data.name = "repeat";
        return alert("contact already exist at phonebook ");
      }
    });
    if (data.name === "repeat") {
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  };
  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };
  getContactsShown = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    return (
      <div>
        <Title1>Phonebook</Title1>
        <Form onSubmit={this.formSubmitHandler} />
        <Title2>Contacts</Title2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <Contact
          contacts={this.getContactsShown()}
          handleDelete={this.contactDelete}
        />
      </div>
    );
  }
}