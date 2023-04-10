import React, { Component } from "react";
import shortid from "shortid";
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

  componentDidMount() {
    console.log("component did mount");
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    console.log(parsedContacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component did update");
    if (this.state.contacts !== prevState.contacts) {
      console.log("component was updated");
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  formId = () => {
    shortid.generate();
  };

  contactDelete = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  formSubmitHandler = (data) => {
    const { contacts } = this.state;
    const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (existingContact) {
      alert("Contact already exists in phonebook.");
      return;
    }
    const newContact = { ...data, id: shortid.generate() };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
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
        <Form onSubmit={this.formSubmitHandler} />
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <Contact
          contacts={this.getContactsShown()}
          handleDelete={this.contactDelete}
        />
      </div>
    );
  }
}