import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

// main functional component 
export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]); 


  // logic for adding a task 
  const addTask = () => {
    if (task.trim() === '') return; // ensure no empty tasks are added
    setTasks([...tasks, {id: Date.now().toString(), value: task }])
    setTask('') // clear the task field 
  }

  // logic for deleting a task
  // returns a new array of tasks excluding the task with the selected taskID
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task"
          value={task}
          onChangeText={setTask}
        />
        <Button title="Add" onPress={addTask} />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => deleteTask(item.id)}>
            <Text style={styles.task}>{item.value}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    marginRight: 10,
    padding: 5,
  },
  task: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9c2ff',
    borderRadius: 5,
  },
});
