import React, { Component } from 'react';
import axios from 'axios';
import ContactList from './ContactList';
import SearchBar from './SearchBar';
import AddNewContact from './AddNewContact';

class App extends Component {
  constructor() {
    console.log('constructor');
    debugger;
    super();

    this.state = {
      searchText: '',
      contacts: []
    };
  }

componentDidMount() {
    axios.get('https://limitless-bayou-36199.herokuapp.com/api/contacts')
      .then(resp => {
        this.setState({
          searchText: this.state.searchText,
          contacts: resp.data
        })
      })
      .catch(err => console.log(`Error! ${err}`));
}

  handleChange(event) {
    this.setState({
      contacts: this.state.contacts,
      searchText: event.target.value
    })
  }

  getFilteredContacts() {
    //remove whitespace and make lowercase
    const term = this.state.searchText.trim().toLowerCase();
    const contacts = this.state.contacts;

    //if term is empty string, return all contacts
    if (!term) {
      return contacts;
    }

    //return contacts where search term is true
    return contacts.filter(contact => {
      return contact.name.toLowerCase().search(term) >= 0;
    });
  }

render() {
    return (
      <div className="App">
      //not sure what to do with the value of AddNewContact
        <AddNewContact value={this.state.searchText} onChange={this.handleChange.bind(this)}/>
        <SearchBar value={this.state.searchText} onChange={this.handleChange.bind(this)}/>
        <ContactList contacts={this.getFilteredContacts()}/>
      </div>
    );
  }
}

//add a post request, create a new array entirely
//axios.post('localhost:3001/api/contacts')
// .then (resp=> {
//   const contact = resp.data;
//   this.setState({
//     searchText: this.state.searchText,
//     contacts: [contact].concat(this.state.contacts)
//   })
// })


export default App;
