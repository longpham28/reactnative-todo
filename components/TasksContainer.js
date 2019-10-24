import React from 'react';
import { View, StyleSheet, Text, FlatList, Button } from 'react-native';
import Color from '../constant/Color';
function TaskRow(props) {
  return (
    <View style={styles.taskRow}>
      <View style={styles.textContainer}>
        <Text>{props.children}</Text>
      </View>
      <View style={styles.button}>
        <Button title="DEL" onPress={props.onDel} color={Color.accent}></Button>
      </View>
    </View>
  );
}

export default function TaskContainer(props) {
  return (
    <View style={styles.tasksContainer}>
      <FlatList
        contentContainerStyle={styles.flatList}
        data={props.data.map((item, index) => {
          return { ...item, key: index.toString() };
        })}
        renderItem={itemData => {
          return (
            <TaskRow
              onDel={() => {
                props.onDelTask(itemData.index);
              }}
            >
              {itemData.item.title}
            </TaskRow>
          );
        }}
      ></FlatList>
    </View>
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
    width: '60%'
  }
});
