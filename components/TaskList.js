import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function TaskList({ tasks, onDeleteTask }) {
  const getBackgroundColor = (priority) => {
    switch (priority) {
      case "high":
        return "#f8d7da";
      case "medium":
        return "#fff3cd";
      case "low":
        return "#d4edda";
      default:
        return "#ffffff";
    }
  };

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onDeleteTask(item.id)}>
          <View
            style={[
              styles.task,
              { backgroundColor: getBackgroundColor(item.priority) },
            ]}
          >
            <Text style={styles.taskText}>{item.text}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
  },
  taskText: {
    fontSize: 16,
  },
});
