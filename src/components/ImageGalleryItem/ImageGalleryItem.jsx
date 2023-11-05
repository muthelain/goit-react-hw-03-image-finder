import PropTypes from 'prop-types';
import {
  ImageGalleryItemStyled,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export function ImageGalleryItem({ webformatURL, tags, onClick }) {
  return (
    <ImageGalleryItemStyled>
      <ImageGalleryItemImage onClick={onClick} src={webformatURL} alt={tags} />
    </ImageGalleryItemStyled>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

