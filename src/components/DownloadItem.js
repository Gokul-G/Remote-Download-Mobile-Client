import React, { Component } from 'react';
import { Text, ListItem } from 'native-base';

export default class DownloadItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <ListItem>
        <Text>{this.props.item.name} </Text>
        <Text>{this.props.item.url} </Text>
      </ListItem>
    );
  }
}
