import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> {this.props.children} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    height: 50,
    borderColor: '#d6d7da',
  },
});
export default Header;
