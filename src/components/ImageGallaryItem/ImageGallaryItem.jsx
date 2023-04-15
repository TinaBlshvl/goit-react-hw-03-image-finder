import css from '../styles/Styles.module.css';
// import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ item }) => {
  return (
    <li className={css.imageItem}>
      <img
        className={css.image}
        src={item.webformatURL}
        data-url={item.largeImageURL}
        alt="Тут має бути зображення"
      />
    </li>
  );
};

// ImageGalleryItem.PropTypes = {
//   item: PropTypes.shape({
//     webformatURL: PropTypes.string.isRequired,
//     largeImageURL: PropTypes.string.isRequired,
//   }).isRequired,
// };
