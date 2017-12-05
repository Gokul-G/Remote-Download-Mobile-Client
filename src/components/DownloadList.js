import React, { RefreshControl, Component } from 'react';
import { List, ListItem, Text } from 'native-base';
import axios from 'axios';
import DownloadItem from './DownloadItem';

export default class DownloadList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios
      .get('http://localhost:8080/downloads')
      .then(response => this.setState({ items: response.data }));
  }

  render() {
    return <List dataArray={this.state.items} renderRow={item => <DownloadItem item={item} />} />;
  }
}
