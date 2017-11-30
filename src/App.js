import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Subtitle } from 'native-base';

export default class HeaderTitleSubtitleExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body style={{ flex: 5 }}>
            <Title>Remote Download Mobile Client</Title>
          </Body>
        </Header>
      </Container>
    );
  }
}
