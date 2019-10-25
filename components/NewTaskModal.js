import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Button,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Dimensions
} from 'react-native';

import Color from '../constant/Color';
import { DimensionsContext } from '../App.js';
export default function NewTaskModal(props) {
  const [input, setInput] = useState('');
  const dimensions = useContext(DimensionsContext);
  return (
    <Modal
      animationType="slide"
      visible={props.visible}
      supportedOrientations={['landscape', 'portrait']}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={20}>
            <View style={{ ...styles.card, width: dimensions.width * 0.7 }}>
              <Text style={styles.title}>新しいタスクを追加する</Text>
              <TextInput
                style={{
                  ...styles.input,
                  width: dimensions.height > 600 ? '70%' : '90%'
                }}
                placeholder="新しいタスク..."
                value={input}
                onChangeText={text => {
                  setInput(text);
                }}
              ></TextInput>
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Button
                    title="追加"
                    onPress={() => {
                      props.addNewTask(input);
                      setInput('');
                      props.onCancel();
                    }}
                    color={Color.darkPrimary}
                  ></Button>
                </View>
                <View style={styles.button}>
                  <Button
                    title="Cancel"
                    onPress={() => {
                      setInput('');
                      props.onCancel();
                    }}
                    color={Color.accent}
                  ></Button>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  card: {
    maxHeight: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 40
  },
  title: { fontSize: 20 },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '90%'
  },
  input: {
    borderBottomColor: Color.divider,
    borderBottomWidth: 1,
    padding: 10,
    marginVertical: 20
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 90
  }
});
