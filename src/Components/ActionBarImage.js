import React, { Component } from 'react'; 
import { StyleSheet, View, Text, Image } from 'react-native';
 
export default class ActionBarImage extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={{
            uri:
              'IMAGE URL GELECEK',
          }}
          style={{
            width: 35,
            height: 35,
            borderRadius: 40 / 2,
          }}
        />
      </View>
    );
  }
}

