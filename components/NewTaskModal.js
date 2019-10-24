import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Button,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';

import Color from '../constant/Color';

export default function NewTaskModal(props) {
  const [input, setInput] = useState('');
  return (
    <Modal animationType="slide" visible={props.visible}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.title}>新しいタスクを追加する</Text>
            <TextInput
              style={styles.input}
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
                ></Button>
              </View>
              <View style={styles.button}>
                <Button
                  title="キャンセル"
                  onPress={() => {
                    setInput('');
                    props.onCancel();
                  }}
                ></Button>
              </View>
            </View>
          </View>
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
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 40
  },
  title: { fontSize: 20 },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '70%'
  },
  input: {
    width: '70%',
    borderBottomColor: Color.divider,
    borderBottomWidth: 1,
    padding: 10,
    marginVertical: 20
  },
  button: {
    width: 90
  }
});
