import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';
import { getDataFromAPI, loadMoreDataFromAPI } from 'utils/API';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { LoaderSpinner } from 'components/Loader/Loader';
import { LoadMoreBtn } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';

export class ImageGallery extends Component {
  state = {
    arrayOfImages: [],
    status: `idle`,
    isModalVisible: false,
    largeImg: '',
    tagsForModal: '',
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.nameToFetch !== this.props.nameToFetch) {
      this.setState({ status: 'pending' });

      getDataFromAPI(this.props.nameToFetch).then(data => {
        this.setState({ arrayOfImages: data.hits });
        if (data.hits.length > 0) {
          this.setState({ status: 'resolved' });
          return;
        }
        this.setState({ status: 'rejected' });
      });
    }
  }
  loadMoreData = () => {
    loadMoreDataFromAPI().then(data => {
      this.setState(prevState => ({
        arrayOfImages: [...prevState.arrayOfImages, ...data.hits],
      }));
    });
  };
  onImageClick = e => {
    const imgToFind = this.state.arrayOfImages.find(
      img => img.webformatURL === e.currentTarget.src
    );
    this.setState({
      largeImg: imgToFind.largeImageURL,
      tagsForModal: imgToFind.tags,
    });
    this.setState({ isModalVisible: true });
  };
  modalClose = e => {
    this.setState({ isModalVisible: false });
  };

  render() {
    const { arrayOfImages, status, isModalVisible, tagsForModal, largeImg } =
      this.state;

    if (status === 'pending') {
      return <LoaderSpinner />;
    }
    if (status === 'rejected') {
      return;
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGalleryList>
            {arrayOfImages.length > 0 &&
              arrayOfImages.map(img => {
                return (
                  <ImageGalleryItem
                    onClick={this.onImageClick}
                    tags={img.tags}
                    webformatURL={img.webformatURL}
                    key={img.id}
                  />
                );
              })}
          </ImageGalleryList>
          <LoadMoreBtn loadMoreData={this.loadMoreData} />
          {isModalVisible && (
            <Modal
              modalClose={this.modalClose}
              largeImg={largeImg}
              tags={tagsForModal}
            />
          )}
        </>
      );
    }
  }
}

ImageGallery.propTypes = {
  nameToFetch: PropTypes.string,
};
