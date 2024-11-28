import React from 'react'; 
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'; 

export default function TaskList({ tasks, onDeleteTask }) {
    
    
    const getBackgroundColor = (priority) => {
        switch (priority) {
            case 'high': return '#f8d7da';
            case 'medium': return '#fff3cd';
            case 'low': return '#d4edda'; 
            default: return '#ffffff';
        }
    }; 

        
    return (

    )
} 