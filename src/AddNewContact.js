import React, { Component } from 'react';

const NewContact = (props) => {
  return (
    <li className="contact">
      <div className="image-cropper">
        <img src={props.avatar} alt="avatar"/>
      </div>
      <div className="contact-info">
        <h2>{props.name}</h2>
        {props.occupation}
      </div>
    </li>
  )
}

AddNewContact.propTypes = {
  avatar: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  occupation: React.PropTypes.string.isRequired
};

export default AddNewContact;
