import React, { Component } from 'react';
import ContactList from './ContactList';
import SearchBar from './SearchBar';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      contacts: [
        {
          id: 'dale',
          name: 'Dale Cooper',
          occupation: 'FBI Agent',
          avatar: 'https://upload.wikimedia.org/wikipedia/en/5/50/Agentdalecooper.jpg'
        },
        {
          id: 'spike',
          name: 'Spike Spiegel',
          occupation: 'Bounty Hunter',
          avatar: 'http://vignette4.wikia.nocookie.net/deadliestfiction/images/d/de/Spike_Spiegel_by_aleztron.jpg/revision/latest?cb=20130920231337'
        },
        {
          id: 'wirt',
          name: 'Wirt',
          occupation: 'Adventurer',
          avatar: 'http://66.media.tumblr.com/5ea59634756e3d7c162da2ef80655a39/tumblr_nvasf1WvQ61ufbniio1_400.jpg'
        },
        {
          id: 'michael',
          name: 'Michael',
          occupation: 'Loving little brother',
          avatar: 'http://vignette2.wikia.nocookie.net/villains/images/e/e3/MMH.jpg/revision/latest?cb=20150810215746'
        },
        {
          id: 'dana',
          name: 'Dana Scully',
          occupation: 'FBI Agent',
          avatar: 'https://pbs.twimg.com/profile_images/718881904834056192/WnMTb__R.jpg'
        }
      ]
    };
  }
  handleSearchBarChange(event) {
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
        <SearchBar value={this.state.searchText} onChange={this.handleSearchBarChange.bind(this)}/>
        <ContactList contacts={this.getFilteredContacts()}/>
      </div>
    );
  }
}

export default App;
