import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileCheck() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Its a tab to check the profile</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5791f4',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
