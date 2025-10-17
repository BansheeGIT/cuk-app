import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AttendanceCheck() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Its a tab to check the attendance</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d457dd',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
