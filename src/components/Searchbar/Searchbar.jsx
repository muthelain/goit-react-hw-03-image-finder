import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';

import {
  SearchBarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export class SearchBar extends Component {
  state = {
    inputValue: '',
  };

  onInputChange = e => {
    this.setState({ inputValue: e.currentTarget.value });
  };

  onFormSubmit = e => {
    e.preventDefault();

    if (this.state.inputValue.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <SearchBarHeader>
        <SearchForm onSubmit={this.onFormSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>
              <BsSearch size={26} />
            </SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            onChange={this.onInputChange}
            type="text"
            autocomplete="off"
            autoFocus
            value={this.state.inputValue}
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchBarHeader>
    );
  }
}


SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};