import React from "react";
import PropTypes from "prop-types"; 
import { List, ContactItem, ButtonDelete } from "./Contacts.styled"

const Contact = ({ contacts, handleDelete }) => (
    <List>
   { contacts.map(({id, name, number}) => <ContactItem key={id}>{`${name}: ${number}`} <ButtonDelete type="button" onClick={() => handleDelete(id)}>Delete</ButtonDelete></ContactItem>)}
    </List>
);
Contact.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    handleDelete: PropTypes.func.isRequired,
};
export default Contact;