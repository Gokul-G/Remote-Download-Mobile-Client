import React, { Component } from 'react';
import { Content, Container, Header, List, ListItem, Text } from 'native-base';
import DownloadList from './components/DownloadList';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <DownloadList />
        </Content>
      </Container>
    );
  }
}
