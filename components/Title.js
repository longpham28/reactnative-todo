import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import { DimensionsContext } from '../App';
import Color from '../constant/Color';
export default function Title(props) {
  const dimensions = useContext(DimensionsContext);
  return (
    <View
      style={{
        ...styles.titleContainer,
        paddingTop: dimensions.height > 600 ? 35 : 20,
        paddingBottom: dimensions.height > 600 ? 25 : 15
      }}
    >
      <Text
        {...props}
        style={{
          ...styles.title,
          ...props.style,
          fontSize: dimensions.height > 600 ? 40 : 30
        }}
      >
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
    backgroundColor: Platform.select({
      ios: 'white',
      android: Color.darkPrimary
    }),
    borderBottomColor: Platform.os === 'android' ? 'white' : Color.divider,
    borderBottomWidth: Platform.os === 'android' ? 0 : 1
  },
  title: {
    color: Platform.select({ ios: Color.darkPrimary, android: 'white' }),
    fontFamily: 'pacifico'
  }
});
