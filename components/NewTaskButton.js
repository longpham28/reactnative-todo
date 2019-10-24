import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

import Color from '../constant/Color';

export default function NewTaskButton(props) {
  return (
    <View style={styles.buttonContainer}>
      <Button
        title="新しいタスク"
        onPress={props.onPress}
        color={Color.primary}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30
  }
});
