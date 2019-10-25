import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Button,
  SafeAreaView
} from 'react-native';
import Color from '../constant/Color';
function TaskRow(props) {
  return (
    <View style={{ ...styles.taskRow, opacity: props.isDone ? 0.4 : 1 }}>
      <View style={styles.textContainer}>
        <Text>{props.children}</Text>
      </View>
      <View style={styles.buttonsContainter}>
        <View style={styles.button}>
          <Button
            title={props.isDone ? '未完了' : '完了'}
            onPress={props.isDone ? props.onUnDone : props.onDone}
            color={Color.darkPrimary}
          ></Button>
        </View>
        <View style={styles.button}>
          <Button
            title="消除"
            onPress={props.onDel}
            color={Color.accent}
          ></Button>
        </View>
      </View>
    </View>
  );
}

export default function TaskContainer(props) {
  return (
    <SafeAreaView style={styles.tasksContainer}>
      <FlatList
        contentContainerStyle={styles.flatList}
        data={props.data.map((item, index) => {
          return { ...item, key: index.toString() };
        })}
        renderItem={itemData => {
          return (
            <TaskRow
              isDone={itemData.item.isDone}
              onDel={() => {
                props.onDelTask(itemData.index);
              }}
              onDone={() => {
                props.onDoneTask(itemData.index);
              }}
              onUnDone={() => {
                props.onUnDoneTask(itemData.index);
              }}
            >
              {itemData.item.title}
            </TaskRow>
          );
        }}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tasksContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20
  },
  flatList: {
    flex: 1
  },
  taskRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: Color.divider,
    borderBottomWidth: 1,
    paddingBottom: 20,
    marginTop: 20
  },
  textContainer: {
    width: '40%'
  },
  buttonsContainter: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70
  }
});
