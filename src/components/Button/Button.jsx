import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

export function LoadMoreBtn({ loadMoreData }) {
  return (
    <ButtonStyled type="button" onClick={loadMoreData}>
      Load more
    </ButtonStyled>
  );
}

LoadMoreBtn.propTypes = {
  loadMoreData: PropTypes.func.isRequired,
};

