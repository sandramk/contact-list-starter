import React, { Component } from 'react';
import Contact from './Contact';
// import AddNewContact from './AddNewContact';

class ContactList extends Component {

  render() {
    return (
      <ul className="contact-list">
        {this.props.contacts.map(contact => {
          return (
            <Contact
              key={contact.id}
              name={contact.name}
              avatar={contact.avatar}
              occupation={contact.occupation}
            />
          )
        })}
      </ul>
    );
  }
}

Contact.propTypes = {
  contacts: React.PropTypes.array.isRequired
};
export default ContactList;
