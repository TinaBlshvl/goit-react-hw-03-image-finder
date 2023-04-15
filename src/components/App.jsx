import { Component } from 'react';
import { Grid } from 'react-loader-spinner';
import { getImages } from 'services/fetch';

import { Searchbar } from './Serchbar/Searchbar';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { ImageGallery } from './Image/ImageGallary';

export class App extends Component {
  static = {
    isShown: false,
    page: 1,
    loader: false,
    total: 0,
    result: [],
    search: '',
    modalUrl: null,
  };

  async componentDidUpdate(prevProp, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search) {
      this.setState({
        result: [],
        total: 0,
        loader: true,
      });

      try {
        await getImages(search).then(data => {
          const res = data.hits.map(({ id, webformatURL, largeImageURL }) => {
            return { id, webformatURL, largeImageURL };
          });
          this.setState({
            result: res,
            total: data.totalHits,
            loader: false,
          });
        });
      } catch (error) {
        this.setState({ loader: false });
      }
    } else if (prevState.page !== page) {
      this.setState({ loader: true });

      try {
        await getImages(search, page).then(data => {
          const res = data.hits.map(({ id, webformatURL, largeImageURL }) => {
            return { id, webformatURL, largeImageURL };
          });

          this.setState({
            result: [...prevState.result, ...res],
            loader: false,
            page,
          });
        });
      } catch (error) {
        this.setState({ loader: false });
      }
    }
  }

  formSubmit = searchValue => {
    this.setState({
      search: searchValue,
      page: 1,
    });
  };

  loadMore = page => {
    this.setState({ page });
  };

  toggleModal = () => {
    this.setState({
      isShown: !this.state.isShown,
    });
  };

  // openModalImg = e => {
  //   if (e.nodeName !== 'IMG') {
  //     return;
  //   }

  //   this.toggleModal();
  //   this.setState({
  //     modalUrl: e.dataset.url,
  //   });
  // };

  render() {
    const { search, loader, result, page, modalUrl, total } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.formSubmit} />
        {loader && (
          <Grid
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}

        {result.length > 0 && (
          <ImageGallery items={result} openModal={this.openModalImg} />
        )}

        {this.state.isShown && (
          <Modal urlItem={modalUrl} toggleModal={this.toggleModal} />
        )}

        {result.length > 0 && result.length < total && !loader && (
          <Button value={search} loadMore={this.loadMore} numberPage={page} />
        )}

        {total === 0 && search && !loader && (
          <p>No photo after your search...</p>
        )}
      </div>
    );
  }
}
