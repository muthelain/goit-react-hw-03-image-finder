import React, { Component } from 'react';
import { AppContainer } from './App.styled';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    nameToFetch: null,
  };

  onSubmit = name => {
    this.setState({ nameToFetch: name });
  };

  render() {
    return (
      <AppContainer>
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery nameToFetch={this.state.nameToFetch}></ImageGallery>
      </AppContainer>
    );
  }
}
