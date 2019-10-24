import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Color from '../constant/Color';

export default function Title(props) {
  return (
    <View style={styles.titleContainer}>
      <Text {...props} style={{ ...styles.title, ...props.style }}>
        {props.children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: Color.darkPrimary
  },
  title: {
    fontSize: 40,
    color: 'white',
    fontFamily: 'pacifico'
  }
});
