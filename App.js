import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="NOTES FOR BOOKS - BMG IV"/>
      <Button title="ADD NOTE" onPress = {() => {
        console.log('Added');
      }} />
      <TextInput >Learning</TextInput>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
