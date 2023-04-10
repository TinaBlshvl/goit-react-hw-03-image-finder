import css from '../styles/Styles.module.css';
import { Component } from 'react';
import { GrSearch } from 'react-icons/gr';

export class Searchbar extends Component {
  //   state = {};

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm}>
          <button type="submit" className={css.searchFormButton}>
            <GrSearch className={css.searchIcon} />
          </button>

          <input
            className={css.searchFormInput}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
