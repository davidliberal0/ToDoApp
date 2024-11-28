import React, {useState } from 'react';
import {View, TextInput, Button, Picker, StyleSheet } from 'react-native'; 

export default function TaskInput({ onAddTask }) {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('low'); 


    const handleAddTask = () => {
        if (task.trim() === '') return; 
        onAddTask({ text: task, priority }); 
        setTask(''); 
        setPriority('low'); // reset 
    }


    return (
        <View style={StyleSheet.container}>
            <TextInput 
                style={styles.input} 
                placeholder="Enter a task..."
                value={task}
                onChangeText={setTask} 
            />
            <Picker
                selectedValue={priority}
                style={style.picker}
                onValueChange={(itemValue) => setPriority(itemValue)}
            >
                <Picker.Item label="Low" value="low" /> 
                <Picker.Item label="Medium" value="medium" /> 
                <Picker.Item label="High" value="high" /> 
            </Picker>
            <Button title="Add" onPress={handleAddTask} /> 
        </View>
    ); 


}