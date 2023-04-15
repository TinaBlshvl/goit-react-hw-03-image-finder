import css from '../styles/Styles.module.css';
import { Component } from 'react';
import { GrSearch } from 'react-icons/gr';

export class Searchbar extends Component {
  state = { value: '' };

  handleText = e => {
    this.setState({ value: e.target.value.trim() });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit = this.state.value;
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.onSubmit}>
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
