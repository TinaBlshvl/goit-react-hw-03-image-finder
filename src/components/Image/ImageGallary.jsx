import css from '../styles/Styles.module.css';
import PropTypes from 'prop-types';
// import { useLayoutEffect } from 'react';

import { ImageGalleryItem } from 'components/ImageGallaryItem/ImageGallaryItem';

export const ImageGallery = ({ items }) => {
  return (
    <ul className={css.imageGallery}>
      {/* {items.map(item => (
        <li key={item.id}>
          return(
          <ImageGalleryItem key={item.id} item={item} />
          );
        </li>
      ))} */}

      {items.map(item => {
        return <ImageGalleryItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

ImageGallery.PropTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
