import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <input
        className='search-bar'
        type="text"
        value={this.props.value}
        onChange={ event => this.props.onChange(event) }
      />
    );
  }
}

SearchBar.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default SearchBar;
