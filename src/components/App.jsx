import { Component } from 'react';
// import { Grid } from 'react-loader-spinner';

import { Searchbar } from './Serchbar/Searchbar';
import { Button } from './Button/Button';

export class App extends Component {
  render() {
    return (
      <div>
        <Searchbar />
        <Button />
      </div>
    );
  }
}
