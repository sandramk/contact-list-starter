import React, { Component } from 'react';

class AddNewContact extends Component {
  constructor(){
    super();

    this.state
  }

  return (
    <div>
      <input
        className='new-contact'
        type='text'
        value={props.value}
        onChange={ event => props.onChange(event) }
      />
      <input
        className='new-contact'
        type='text'
        value={props.value}
        onChange={ event => props.onChange(event) }
      />
      <input
        className='new-contact'
        type='text'
        value={props.value}
        onChange={ event => props.onChange(event) }
      />
    </div>
  );
};

// NewContact.propTypes = {
//   avatar: React.PropTypes.string.isRequired,
//   name: React.PropTypes.string.isRequired,
//   occupation: React.PropTypes.string.isRequired
// };

AddNewContact.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default AddNewContact;
