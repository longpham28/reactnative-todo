import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { loadAsync } from 'expo-font';
import { AppLoading } from 'expo';
import Title from './components/Title';
import NewTaskButton from './components/NewTaskButton';
import NewTaskModal from './components/NewTaskModal';
import TasksContainer from './components/TasksContainer';
const loadFont = () => {
  return loadAsync({
    pacifico: require('./assets/fonts/Pacifico-Regular.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [isAddingNewTask, setIsAddingNewTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const addTask = task => {
    const newTasks = [...tasks, { title: task, isDone: false }];
    setTasks(newTasks);
  };
  const deleteTask = index => {
    Alert.alert('タスクを消除', 'タスクを消除しますか?', [
      {
        text: 'OK',
        style: 'default',
        onPress: () => {
          const newTasks = tasks.filter((item, i) => i !== index);
          setTasks(newTasks);
        }
      },
      {
        text: 'キャンセル',
        style: 'cancel'
      }
    ]);
  };
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFont}
        onFinish={() => setFontLoaded(true)}
      ></AppLoading>
    );
  }
  return (
    <View style={styles.container}>
      <NewTaskModal
        visible={isAddingNewTask}
        onCancel={() => {
          setIsAddingNewTask(false);
        }}
        addNewTask={addTask}
      ></NewTaskModal>
      <Title>TODO</Title>
      <NewTaskButton
        onPress={() => {
          setIsAddingNewTask(true);
        }}
      ></NewTaskButton>
      <TasksContainer onDelTask={deleteTask} data={tasks}></TasksContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
