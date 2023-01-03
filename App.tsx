/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.statusBar} />
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.text}>SafeAreaView</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: 'orange',
  },
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
  },
  text: {
    color: 'black',
  },
});

export default App;
