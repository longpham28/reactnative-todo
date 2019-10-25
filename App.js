import React, { useState, useContext, createContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
  Dimensions
} from 'react-native';
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
const DimensionsContext = createContext(0);
export { DimensionsContext };
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [isAddingNewTask, setIsAddingNewTask] = useState(false);
  const [tasks, setTasks] = useState([
    { title: 'Working', isDone: true },
    { title: 'Eating', isDone: false }
  ]);
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  Dimensions.addEventListener('change', () => {
    setDimensions(Dimensions.get('window'));
  });
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
  const doneTask = index => {
    const newTasks = tasks.map((item, i) => {
      if (i == index) {
        item = { ...item, isDone: true };
      }
      return item;
    });
    setTasks(newTasks);
  };
  const unDoneTask = index => {
    const newTasks = tasks.map((item, i) => {
      if (i == index) {
        item = { ...item, isDone: false };
      }
      return item;
    });
    setTasks(newTasks);
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
    <ScrollView style={styles.container}>
      <DimensionsContext.Provider value={dimensions}>
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
        <TasksContainer
          onDelTask={deleteTask}
          onDoneTask={doneTask}
          onUnDoneTask={unDoneTask}
          data={tasks}
        ></TasksContainer>
      </DimensionsContext.Provider>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
